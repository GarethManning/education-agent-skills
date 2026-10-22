import { readdir, readFile, stat } from "node:fs/promises";
import { join, basename, dirname, resolve } from "node:path";
import { isAlias, isMap, isNode, isScalar, parseDocument, visit } from "yaml";
import { assertValidLoadedSkills } from "./skill-validation.js";
import type { LoadedSkill, SkillMetadata } from "./types.js";

const IGNORED_FILES = new Set([
  "README.md",
  "ARCHITECTURE.md",
  "EVIDENCE.md",
  "EXCLUSIONS.md",
  "IMPLEMENTATIONS.md",
  "CONTRIBUTING.md",
  "brief.md",
  "llms.txt",
]);

const IGNORED_DIRS = new Set(["schemas", "mcp-server", ".git", "node_modules"]);

function parseFrontmatter(raw: string): { data: unknown; content: string } {
  const opening = raw.match(/^---\r?\n/);
  if (!opening) throw new Error("frontmatter must open with a plain --- line");
  const remainder = raw.slice(opening[0].length);
  const closing = /^---(?:\r?\n|$)/m.exec(remainder);
  if (!closing) throw new Error("frontmatter must close with a plain --- line");

  const document = parseDocument(remainder.slice(0, closing.index), {
    schema: "core",
    version: "1.2",
    customTags: [],
    resolveKnownTags: false,
  });
  if (document.errors.length || document.warnings.length) {
    throw new Error(`invalid YAML frontmatter: ${[...document.errors, ...document.warnings].map((error) => error.message).join("; ")}`);
  }
  const allowedTags = new Set(["map", "seq", "str", "bool", "int", "float", "null"].map((tag) => `tag:yaml.org,2002:${tag}`));
  visit(document, (_key, node) => {
    // Only JSON-like data belongs in metadata; never resolve executable/custom
    // tags, aliases (including cycles), complex keys, or non-finite numbers.
    if (isAlias(node)) throw new Error("YAML aliases are not supported in frontmatter");
    if (isNode(node) && node.tag && !allowedTags.has(node.tag)) {
      throw new Error("custom YAML tags are not supported in frontmatter");
    }
    if (isScalar(node) && typeof node.value === "number" && !Number.isFinite(node.value)) {
      throw new Error("frontmatter numbers must be finite");
    }
    if (isMap(node) && node.items.some(({ key }) => !isScalar(key) || typeof key.value !== "string")) {
      throw new Error("frontmatter mapping keys must be strings");
    }
  });
  if (!isMap(document.contents)) throw new Error("frontmatter must be a YAML mapping");
  return {
    data: document.toJS({ maxAliasCount: 0 }),
    content: remainder.slice(closing.index + closing[0].length),
  };
}

function extractPrompt(content: string): string {
  // Case 1: ## Prompt or ## System Prompt followed by a fenced code block.
  const promptMatch = content.match(
    /^## (?:System )?Prompt[ \t]*\r?\n(?:[ \t]*\r?\n)*(`{3,})[^`\r\n]*\r?\n([\s\S]*?)^\1[ \t]*\r?$/m,
  );
  if (promptMatch) return promptMatch[2].trim();

  // Case 2: h1 prompt with h2 subheadings inside — stop at next h1 or EOF.
  const h1Match = content.match(
    /^# (?:System )?Prompt[ \t]*\n([\s\S]*?)(?=^# [^#]|$(?![\s\S]))/m,
  );
  if (h1Match) return h1Match[1].trim();

  // Case 3: h2 prompt without a code block — stop at next h2, separator, or EOF.
  const sectionMatch = content.match(
    /^## (?:System )?Prompt\s*\n+([\s\S]*?)(?=\n## |\n---[ \t]*(?:\n|$)|$(?![\s\S]))/m,
  );
  if (sectionMatch) return sectionMatch[1].trim();

  return "";
}

function extractDescription(content: string): string {
  const match = content.match(/## What This Skill Does\s*\n+([\s\S]*?)(?=\n## )/);
  if (!match) return "";
  const raw = match[1].trim();
  // Take the first sentence or first 200 chars
  const firstSentence = raw.match(/^[^.]*\./);
  return firstSentence ? firstSentence[0] : raw.slice(0, 200);
}

function buildToolName(skillId: string, duplicateSlugs: Set<string>): string {
  const parts = skillId.split("/");
  const slug = parts[parts.length - 1];
  if (duplicateSlugs.has(slug)) {
    return skillId.replace(/\//g, "__");
  }
  return slug;
}

export async function loadSkills(libraryRoot: string): Promise<LoadedSkill[]> {
  const resolvedRoot = resolve(libraryRoot);
  const skillsDir = join(resolvedRoot, "skills");
  const skills: LoadedSkill[] = [];
  const allFiles: { domain: string; filePath: string }[] = [];

  // v2 structure: skills/{domain}/{skill-name}/SKILL.md
  let domains: string[];
  try {
    domains = await readdir(skillsDir);
  } catch {
    // Fallback: if skills/ doesn't exist, scan root (pre-v2 compat)
    domains = [];
    const rootEntries = await readdir(resolvedRoot);
    for (const entry of rootEntries) {
      if (IGNORED_DIRS.has(entry) || entry.startsWith(".")) continue;
      const dirPath = join(resolvedRoot, entry);
      const dirStat = await stat(dirPath);
      if (!dirStat.isDirectory()) continue;
      const files = await readdir(dirPath);
      for (const file of files) {
        if (!file.endsWith(".md") || IGNORED_FILES.has(file)) continue;
        allFiles.push({ domain: entry, filePath: join(dirPath, file) });
      }
    }
  }

  // Collect skill files from v2 structure
  for (const domain of domains) {
    if (IGNORED_DIRS.has(domain) || domain.startsWith(".")) continue;
    const domainPath = join(skillsDir, domain);
    const domainStat = await stat(domainPath);
    if (!domainStat.isDirectory()) continue;

    const skillDirs = await readdir(domainPath);
    for (const skillDir of skillDirs) {
      const skillDirPath = join(domainPath, skillDir);
      const skillDirStat = await stat(skillDirPath);
      if (!skillDirStat.isDirectory()) continue;

      const skillFile = join(skillDirPath, "SKILL.md");
      try {
        await stat(skillFile);
        allFiles.push({ domain, filePath: skillFile });
      } catch {
        // No SKILL.md in this directory, skip
      }
    }
  }

  // Detect duplicate slugs
  // v2: slug comes from parent directory name (skills/domain/SLUG/SKILL.md)
  // v1 fallback: slug comes from filename (domain/slug.md)
  const slugCounts = new Map<string, number>();
  for (const { filePath } of allFiles) {
    const fileName = basename(filePath);
    const slug = fileName === "SKILL.md" ? basename(dirname(filePath)) : basename(filePath, ".md");
    slugCounts.set(slug, (slugCounts.get(slug) ?? 0) + 1);
  }
  const duplicateSlugs = new Set<string>();
  for (const [slug, count] of slugCounts) {
    if (count > 1) duplicateSlugs.add(slug);
  }

  // Apply domain filter if set
  const domainFilter = process.env.SKILLS_FILTER
    ?.split(",")
    .map((d) => d.trim())
    .filter(Boolean);

  // Parse each file
  for (const { domain, filePath } of allFiles) {
    if (domainFilter && !domainFilter.includes(domain)) continue;

    try {
      const raw = await readFile(filePath, "utf-8");
      const { data, content } = parseFrontmatter(raw);
      const metadata = data as SkillMetadata;

      if (!metadata.skill_id || !metadata.input_schema) throw new Error("missing skill_id or input_schema");

      const prompt = extractPrompt(content);
      if (!prompt) throw new Error("missing a supported Prompt or System Prompt section");
      // Prefer v2 frontmatter description, fall back to markdown body extraction
      const description = (typeof metadata.description === "string" && metadata.description)
        ? metadata.description
        : extractDescription(content);
      const toolName = buildToolName(metadata.skill_id, duplicateSlugs);

      skills.push({ metadata, prompt, description, filePath, toolName });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      throw new Error(`Failed to load ${filePath}: ${message}`);
    }
  }

  assertValidLoadedSkills(skills);
  return skills;
}
