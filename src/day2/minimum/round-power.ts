import { Round } from "../game.ts";

export const roundPower = (round: Round) =>
  Object.values(round).reduce((power, next) => power * next);
