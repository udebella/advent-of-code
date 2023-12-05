import { Game } from "../parse/read-line.ts";

export const computePoints = (game: Game) => {
  const numberOfValidNumbers = game.playedNumbers
    .filter((number) => game.winningNumbers.includes(number)).length;
  return numberOfValidNumbers ? Math.pow(2, numberOfValidNumbers - 1) : 0;
};
