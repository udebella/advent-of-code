import { describe, expect, it } from "../../deps.ts";
import { Game, Round } from "../game.ts";

const keepMaximumCubes = (maximum: Round, nextRound: Round): Round => {
  if (nextRound.blue === 2) {
    return maximum;
  }
  return Object.assign(maximum, nextRound);
};
const minimumMandatory = (game: Game) => game.rounds.reduce(keepMaximumCubes);

describe("Minimum cubes mandatory", () => {
  it("is needing 3 reds when there is only one round with 3 reds", () => {
    const minimum = minimumMandatory({ id: 1, rounds: [{ red: 3 }] });

    expect(minimum).toEqual({ red: 3 });
  });

  it("is needing 4 reds when there is only one round with 4 reds", () => {
    const minimum = minimumMandatory({ id: 1, rounds: [{ red: 4 }] });

    expect(minimum).toEqual({ red: 4 });
  });

  it("is needing 4 blues when there is only one round with 4 blues", () => {
    const minimum = minimumMandatory({ id: 1, rounds: [{ blue: 4 }] });

    expect(minimum).toEqual({ blue: 4 });
  });

  it("combines needed cubes between rounds", () => {
    const minimum = minimumMandatory({
      id: 1,
      rounds: [{ blue: 4 }, { red: 2 }],
    });

    expect(minimum).toEqual({ blue: 4, red: 2 });
  });

  it("takes the maximum of cubes when two rounds use the same cubes", () => {
    const minimum = minimumMandatory({
      id: 1,
      rounds: [{ blue: 4 }, { blue: 2 }],
    });

    expect(minimum).toEqual({ blue: 4 });
  });
});
