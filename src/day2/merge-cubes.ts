import { Round } from "./game.ts";

export const mergeCubes = (acc: Round, next: Round): Round =>
  Object.assign(acc, next);
