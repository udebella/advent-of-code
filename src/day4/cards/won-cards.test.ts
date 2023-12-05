import { describe, expect, it } from "../../deps.ts";

const wonCards = (game: { number: number; winningNumbers: number }[]) => {
  return 1;
};

describe("Won cards", () => {
  it("can compute won cards", () => {
    const game = [
      { number: 1, winningNumbers: 1 },
    ];

    expect(wonCards(game)).toEqual(1);
  });
});
