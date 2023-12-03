import { countPossibleGames } from "./validity/count-possible-games.ts";
import { gamesPower } from "./minimum/games-power.ts";

const lines = (await Deno.readTextFile("./input.txt")).split("\n");
const resultRound1 = countPossibleGames(lines);
console.log(`[calibrate.ts:11] result round 1`, resultRound1);

const resultRound2 = gamesPower(lines);
console.log(`[calibrate.ts:11] result round 1`, resultRound2);
