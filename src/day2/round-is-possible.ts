import { Round } from "./parse-game.ts";

export const isRoundPossible = ({ red = 0, green = 0, blue = 0 }: Round) =>
  red <= 12 && green <= 13 && blue <= 14;
