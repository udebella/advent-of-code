import { Game, Round } from "../game.ts";
import { mergeCubes } from "../merge-cubes.ts";

const keepMaximumCubes = (maximum: Round, nextRound: Round): Round => {
  const properties: (keyof Round)[] = ["red", "green", "blue"];
  const commonProperty = properties
    .filter((key) => key in nextRound && key in maximum)
    .map((key) => ({ [key]: Math.max(maximum[key]!, nextRound[key]!) }))
    .reduce(mergeCubes, {});
  return Object.assign(maximum, nextRound, commonProperty);
};

export const minimumMandatory = (game: Game) =>
  game.rounds.reduce(keepMaximumCubes);
