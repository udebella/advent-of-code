import { describe, expect, it } from "../../deps.ts";
import { Game, Round } from "../game.ts";

const mergeCubes = (acc: Round, next: Round): Round => Object.assign(acc, next);
const minimumMandatory = (game: Game) => game.rounds.reduce(mergeCubes);

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

  it("is needing combines needed cubes between rounds", () => {
    const minimum = minimumMandatory({
      id: 1,
      rounds: [{ blue: 4 }, { red: 2 }],
    });

    expect(minimum).toEqual({ blue: 4, red: 2 });
  });
});
