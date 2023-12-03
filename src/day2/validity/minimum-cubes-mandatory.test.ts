import { describe, expect, it } from "../../deps.ts";
import { Game } from "../game.ts";

const minimumMandatory = (game: Game) => game.rounds[0];

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
});
