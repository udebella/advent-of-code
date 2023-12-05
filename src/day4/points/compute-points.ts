import { Game } from "../parse/read-line.ts";

const computeWinningNumbers = (game: Game) => ({
  winningNumbers: game.playedNumbers
    .filter((number) => game.winningNumbers.includes(number)).length,
});

export const computePoints = (game: Game) => {
  const numberOfValidNumbers = computeWinningNumbers(game).winningNumbers;
  return numberOfValidNumbers ? Math.pow(2, numberOfValidNumbers - 1) : 0;
};
