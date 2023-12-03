import { isRoundPossible } from "./round-is-possible.ts";

import { Game } from "../game.ts";

export const isGamePossible = ({ rounds }: Game) =>
  rounds.every(isRoundPossible);
