import { test, expect } from "@playwright/test";
import { assemblePrompt } from "../src/tool-handler.js";
import type { LoadedSkill } from "../src/types.js";

function assemble(template: string, args: Record<string, unknown>) {
  return assemblePrompt({ prompt: template } as LoadedSkill, args);
}

test("substitutes case-insensitive tokens once and retains the input summary", () => {
  const value = "$& $` $' $$ {{literal}} {{second}}";
  const output = assemble("{{FIRST}} / {{second}} / {{missing}}", { first: value, second: "done" });
  expect(output).toBe(`${value} / done / [not provided]\n\n---\n\n## Teacher Input\n\n**First:** ${value}\n**Second:** done`);
});

test("argument keys are literal even when they contain regular expression syntax", () => {
  const output = assemble("{{a.b}} {{axb}} {{a[b]}} {{x+}} {{(key)}}", {
    "a.b": "dot", "a[b]": "bracket", "x+": "plus", "(key)": "parenthesis",
  });
  expect(output.split("\n\n---")[0]).toBe("dot [not provided] bracket plus parenthesis");
});

test("keeps original first case-insensitive key behavior and literal array contents", () => {
  const output = assemble("{{NAME}} {{items}}", { name: "first", NAME: "second", items: ["$&", "{{name}}"] });
  expect(output.split("\n\n---")[0]).toBe('first ["$&","{{name}}"]');
});
