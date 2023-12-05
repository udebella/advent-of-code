import { describe, expect, it } from "../../deps.ts";

const wonCards = (game: { number: number; winningNumbers: number }[]) => {
  return 1;
};

describe("Won cards", () => {
  it("have only one card when one card does not have winning numbers", () => {
    const game = [
      { number: 1, winningNumbers: 0 },
    ];

    expect(wonCards(game)).toEqual(1);
  });
});
