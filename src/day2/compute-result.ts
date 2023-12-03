import { countPossibleGames } from "./validity/count-possible-games.ts";

const lines = (await Deno.readTextFile("./input.txt")).split("\n");
const result = countPossibleGames(lines);
console.log(`[calibrate.ts:11] result`, result);