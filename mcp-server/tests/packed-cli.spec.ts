import { test, expect } from "@playwright/test";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { mkdtemp, readFile, writeFile, copyFile, mkdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const exec = promisify(execFile);
const project = resolve(dirname(fileURLToPath(import.meta.url)), "..");

test("prepack rebuilds and the packed CLI handshakes outside the source tree", async () => {
  test.setTimeout(60_000);
  const temp = await mkdtemp(join(tmpdir(), "education-packed-cli-"));
  let client: Client | undefined;
  let transport: StdioClientTransport | undefined;
  // Do not forward provider keys, hosted credentials, SKILLS_FILTER, or other
  // user settings into package installation or the isolated CLI process.
  const env = { PATH: process.env.PATH ?? "", HOME: temp, npm_config_cache: process.env.npm_config_cache ?? join(process.env.HOME ?? "", ".npm") };
  try {
    const { stdout, stderr } = await exec("npm", ["pack", "--pack-destination", temp, "--json"], { cwd: project, env, timeout: 30_000 });
    expect(stdout + stderr).toContain("tsc");
    const jsonStart = stdout.indexOf("[\n");
    const [packed] = JSON.parse(stdout.slice(jsonStart));
    expect(packed.files.some((entry: { path: string }) => entry.path === "LICENSE")).toBe(true);
    expect(packed.files.some((entry: { path: string }) => entry.path === "dist/cli.js")).toBe(true);
    await exec("tar", ["-xzf", join(temp, packed.filename), "-C", temp]);
    const extracted = join(temp, "package");
    // Use the tested lock only for reproducible dependency installation;
    // neither the lock nor any repository source path is needed to run the CLI.
    await copyFile(join(project, "package-lock.json"), join(extracted, "package-lock.json"));
    await exec("npm", ["ci", "--ignore-scripts", "--prefer-offline", "--omit=dev", "--no-audit", "--no-fund"], { cwd: extracted, env, timeout: 30_000 });
    await rm(join(extracted, "package-lock.json"));
    expect(await readFile(join(extracted, "LICENSE"), "utf8")).toBe(await readFile(join(project, "LICENSE"), "utf8"));
    expect(await readFile(join(extracted, "dist/skills.json"), "utf8")).toBe(await readFile(join(project, "src/skills.json"), "utf8"));
    // The loader, not this CLI, uses src/skills.json. Delete that optional source
    // copy to prove the installed command reads only its packaged dist assets.
    await rm(join(extracted, "src"), { recursive: true, force: true });
    const empty = join(temp, "empty");
    await mkdir(empty);
    await writeFile(join(empty, "README.txt"), "Unrelated working directory.\n");
    transport = new StdioClientTransport({ command: process.execPath, args: [join(extracted, "dist/cli.js")], cwd: empty, env, stderr: "pipe" });
    client = new Client({ name: "packed-cli-smoke", version: "1.0.0" });
    await client.connect(transport);
    expect((await client.listTools()).tools).toHaveLength(157);
    expect((await client.listPrompts()).prompts).toHaveLength(165);
    const result = await client.callTool({ name: "list_skills", arguments: {} });
    expect(result.isError).not.toBe(true);
  } finally {
    await client?.close();
    await transport?.close();
    await rm(temp, { recursive: true, force: true });
  }
});
