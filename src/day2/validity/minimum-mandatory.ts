import { Game, Round } from "../game.ts";
import { mergeCubes } from "../merge-cubes.ts";

const keepMaximumCubes = (
  maximum: Record<string, number>,
  nextRound: Record<string, number>,
): Round => {
  const commonProperty = Object.keys(maximum)
    .filter((key) => key in nextRound)
    .map((commonProperty) => ({
      [commonProperty]: Math.max(
        maximum[commonProperty],
        nextRound[commonProperty],
      ),
    }))
    .reduce(mergeCubes, {});
  return Object.assign(maximum, nextRound, commonProperty);
};

export const minimumMandatory = (game: Game) =>
  game.rounds.reduce(keepMaximumCubes);
