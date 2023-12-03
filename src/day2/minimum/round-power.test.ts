import { describe, expect, it } from "../../deps.ts";
import { Round } from "../game.ts";

const roundPower = (round: Round) =>
  Object.values(round).reduce((power, next) => power * next);

describe("Round power", () => {
  it("has a power of 3 when only 3 cubes in the round", () => {
    const power = roundPower({ red: 3 });

    expect(power).toBe(3);
  });

  it("has a power of 4 when only 4 cubes in the round", () => {
    const power = roundPower({ red: 4 });

    expect(power).toBe(4);
  });

  it("takes into account blue cubes for power computing", () => {
    const power = roundPower({ blue: 4 });

    expect(power).toBe(4);
  });

  it("multiply cubes to compute power", () => {
    const power = roundPower({ blue: 4, red: 2 });

    expect(power).toBe(8);
  });
});
