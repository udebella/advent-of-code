import { countValidNumbers } from "./count-valid-numbers.ts";
import { readGame } from "./read-game.ts";

const lines = (await Deno.readTextFile("./input.txt")).split("\n");
const resultRound1 = countValidNumbers(readGame(lines));
console.log(`[calibrate.ts:11] result round 1`, resultRound1);
