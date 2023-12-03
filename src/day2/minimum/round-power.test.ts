import { describe, expect, it } from "../../deps.ts";
import { Round } from "../game.ts";

const roundPower = (round: Round) => 3;

describe("Round power", () => {
  it("has a power of 3 when only 3 cubes in the round", () => {
    const power = roundPower({ red: 3 });

    expect(power).toBe(3);
  });
});
