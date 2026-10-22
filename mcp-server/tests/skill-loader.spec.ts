import { test, expect } from "@playwright/test";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { stringify } from "yaml";
import { loadSkills } from "../src/skill-loader.js";
import type { LoadedSkill } from "../src/types.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const bundle: LoadedSkill[] = JSON.parse(await readFile(join(root, "mcp-server/src/skills.json"), "utf8"));

async function withFixture(raw: string, check: (directory: string, file: string) => Promise<void>) {
  const directory = await mkdtemp(join(tmpdir(), "education-frontmatter-"));
  const file = join(directory, "skills/fixture/fixture/SKILL.md");
  try {
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, raw);
    await check(directory, file);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

function frontmatter(extra = "") {
  return `---\n${stringify(bundle[0].metadata)}${extra}---\n`;
}

test("all 165 metadata records and extracted prompts retain deep bundle parity", async () => {
  const skills = await loadSkills(root);
  expect(skills).toHaveLength(165);
  const runtimeData = (skill: LoadedSkill) => ({ metadata: skill.metadata, prompt: skill.prompt, description: skill.description, toolName: skill.toolName });
  expect(skills.map(runtimeData).sort((a, b) => a.metadata.skill_id.localeCompare(b.metadata.skill_id)))
    .toEqual(bundle.map(runtimeData).sort((a, b) => a.metadata.skill_id.localeCompare(b.metadata.skill_id)));
});

for (const [layout, body] of [
  ["fenced Prompt", "## Prompt\n\n```text\nKeep this exact.\n```\n"],
  ["fenced System Prompt", "## System Prompt\n\n```\nKeep this exact.\n```\n"],
  ["h1", "# Prompt\nKeep this exact.\n# Later\nExclude this.\n"],
  ["h2", "## System Prompt\n\nKeep this exact.\n\n## Later\nExclude this.\n"],
]) {
  test(`plain/flow/block YAML and ${layout} remain supported`, async () => {
    const raw = frontmatter('fixture_flow: {items: [one, two], enabled: true}\nfixture_block: |\n  first\n  second\n') + body;
    await withFixture(raw, async (directory) => {
      const [skill] = await loadSkills(directory);
      expect(skill.prompt).toBe("Keep this exact.");
      expect(skill.metadata).toMatchObject({ fixture_flow: { items: ["one", "two"], enabled: true }, fixture_block: "first\nsecond\n" });
    });
  });
}

test("plain CRLF delimiters remain supported", async () => {
  await withFixture((frontmatter() + "## Prompt\n\nKeep this exact.\n").replaceAll("\n", "\r\n"), async (directory) => {
    expect((await loadSkills(directory))[0].prompt).toBe("Keep this exact.");
  });
});

for (const [label, fence, prompt, closing, suffix] of [
  ["normal fenced prompt", "```text", "First instruction.\nSecond instruction.", "```", "\n\n## Example Output\nExclude this example."],
  ["nested triple fence", "````text", "Keep the full method.\n```json\n{\"indicator\": \"Observe independently.\"}\n```\nFinal checklist and output rules.", "````", "\n\n## Example Output\nExclude this example.\n\n## Known Limitations\nExclude this section."],
  ["matching opening length and complete closing lines", "`````", "Inline ``` and ````` remain content.\n````\nShorter fence remains content.\n``````\nLonger fence remains content.\n`````suffix\nFence with suffix remains content.\nFinal instruction.", "````` \t", "\n\n## Later\nExclude this section."],
  ["closing fence at EOF", "```", "Keep both instructions.\nFinish here.", "```", ""],
]) {
  for (const newline of ["\n", "\r\n"]) {
    test(`${label} extracts the full intended content (${newline === "\n" ? "LF" : "CRLF"})`, async () => {
      const body = `## Prompt\n\n${fence}\n${prompt}\n${closing}${suffix}`;
      await withFixture((frontmatter() + body).replaceAll("\n", newline), async (directory) => {
        expect((await loadSkills(directory))[0].prompt).toBe(prompt.replaceAll("\n", newline));
      });
    });
  }
}

test("Learning Target prompt equals the entire fenced method and excludes later sections", async () => {
  const source = await readFile(join(root, "skills/original-frameworks/learning-target-authoring-guide/SKILL.md"), "utf8");
  const opening = "## Prompt\n\n````\n";
  const openingIndex = source.indexOf(opening);
  expect(openingIndex).toBeGreaterThan(-1);
  const start = openingIndex + opening.length;
  const end = source.indexOf("\n````\n\n## Example Output", start);
  expect(end).toBeGreaterThan(start);
  const skill = (await loadSkills(root)).find(({ metadata }) => metadata.skill_id === "original-frameworks/learning-target-authoring-guide");
  expect(skill?.prompt).toBe(source.slice(start, end).trim());
});

for (const [label, raw] of [
  ["js delimiter", "---js\n(globalThis.__educationFrontmatterExecuted = true)\n---\n## Prompt\n\nNever\n"],
  ["javascript delimiter", "---javascript\n(globalThis.__educationFrontmatterExecuted = true)\n---\n## Prompt\n\nNever\n"],
  ["missing opening", "preamble\n" + frontmatter() + "## Prompt\n\nNever\n"],
  ["closing suffix", frontmatter().replace(/---\n$/, "---js\n") + "## Prompt\n\nNever\n"],
  ["missing closing", frontmatter().replace(/---\n$/, "") + "## Prompt\n\nNever\n"],
  ["javascript tag", frontmatter('payload: !!js/function "function () { globalThis.__educationFrontmatterExecuted = true; }"\n') + "## Prompt\n\nNever\n"],
  ["custom tag", frontmatter("payload: !execute harmless\n") + "## Prompt\n\nNever\n"],
  ["typed set", frontmatter("payload: !!set {one: null}\n") + "## Prompt\n\nNever\n"],
  ["alias cycle", frontmatter("payload: &cycle [*cycle]\n") + "## Prompt\n\nNever\n"],
  ["nonfinite number", frontmatter("payload: .inf\n") + "## Prompt\n\nNever\n"],
  ["complex key", frontmatter("? [one, two]\n: three\n") + "## Prompt\n\nNever\n"],
  ["duplicate key", frontmatter("skill_id: duplicate\n") + "## Prompt\n\nNever\n"],
]) {
  test(`rejects ${label} without execution and names the source file`, async () => {
    const marker = globalThis as typeof globalThis & { __educationFrontmatterExecuted?: boolean };
    delete marker.__educationFrontmatterExecuted;
    await withFixture(raw, async (directory, file) => {
      await expect(loadSkills(directory)).rejects.toThrow(`Failed to load ${file}:`);
      expect(marker.__educationFrontmatterExecuted).toBeUndefined();
    });
  });
}
