import { Game } from "../parse/read-line.ts";

export const computeWinningNumbers = (game: Game) => ({
  winningNumbers: game.playedNumbers
    .filter((number) => game.winningNumbers.includes(number)).length,
});
