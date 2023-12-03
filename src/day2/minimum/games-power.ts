import { parseGame } from "../parse/parse-game.ts";
import { minimumMandatory } from "./minimum-mandatory.ts";
import { roundPower } from "./round-power.ts";

export const gamesPower = (gamesAsString: string[]) =>
  gamesAsString
    .map(parseGame)
    .map(minimumMandatory)
    .map(roundPower)
    .reduce((result, power) => result + power);
