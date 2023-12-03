import { isGamePossible } from "./game-is-possible.ts";
import { parseGame } from "../parse/parse-game.ts";

export const countPossibleGames = (games: string[]) =>
  games
    .map(parseGame)
    .filter(isGamePossible)
    .reduce((result, { id }) => result + id, 0);
