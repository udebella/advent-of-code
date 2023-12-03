import { describe, expect, it } from "../../deps.ts";
import { Round } from "../game.ts";

const roundPower = (round: Round) => 3;

describe("Round power", () => {
  it("is needing 3 reds when there is only one round with 3 reds", () => {
    const power = roundPower({ red: 3 });

    expect(power).toBe(3);
  });
});
