import { Game } from "../parse/read-line.ts";
import { computeWinningNumbers } from "./compute-winning-numbers.ts";

export const computePoints = (game: Game) => {
  const { winningNumbers } = computeWinningNumbers(game);
  return winningNumbers ? Math.pow(2, winningNumbers - 1) : 0;
};
