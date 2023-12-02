import { calibrate } from "./calibrate.ts";

const result = (await Deno.readTextFile("./input.txt")).split("\n").map(
  calibrate,
).reduce((a, b) => a + b);
console.log(`[calibrate.ts:11] result`, result);
