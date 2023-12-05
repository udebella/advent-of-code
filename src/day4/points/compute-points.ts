import { Game } from "../parse/read-line.ts";

const computeWinningNumbers = (game: Game) => ({
  winningNumbers: game.playedNumbers
    .filter((number) => game.winningNumbers.includes(number)).length,
});

export const computePoints = (game: Game) => {
  const { winningNumbers } = computeWinningNumbers(game);
  return winningNumbers ? Math.pow(2, winningNumbers - 1) : 0;
};
