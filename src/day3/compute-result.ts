import { countValidNumbers } from "./count-valid-numbers.ts";
import { readGame } from "./read-game.ts";
import { countGearsRatio } from "./count-gears-ratio.ts";

const lines = (await Deno.readTextFile("./input.txt")).split("\n");
const resultRound1 = countValidNumbers(readGame(lines));
console.log(`[day3] result round 1`, resultRound1);

const resultRound2 = countGearsRatio(readGame(lines));
console.log(`[day3] result round 2`, resultRound2);
