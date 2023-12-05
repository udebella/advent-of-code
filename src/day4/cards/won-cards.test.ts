import { describe, expect, it } from "../../deps.ts";
import { wonCards } from "./won-cards.ts";

describe("Won cards", () => {
  it("have only one card when one card does not have winning numbers", () => {
    const cards = [
      { winningNumbers: 0 },
    ];

    expect(wonCards(cards)).toEqual(1);
  });

  it("have two cards when none have winning numbers", () => {
    const cards = [
      { winningNumbers: 0 },
      { winningNumbers: 0 },
    ];

    expect(wonCards(cards)).toEqual(1 + 1);
  });

  it("have three cards when the first card have one winning numbers", () => {
    const cards = [
      { winningNumbers: 1 },
      { winningNumbers: 0 },
    ];

    expect(wonCards(cards)).toEqual(1 + 2);
  });

  it("does not overflow winning cards", () => {
    const cards = [
      { winningNumbers: 2 },
      { winningNumbers: 0 },
    ];

    expect(wonCards(cards)).toEqual(1 + 2);
  });

  it("count bonuses from the copy of the second card", () => {
    const cards = [
      { winningNumbers: 2 },
      { winningNumbers: 1 },
      { winningNumbers: 0 },
    ];

    expect(wonCards(cards)).toEqual(1 + 2 + 4);
  });

  it("only count actual bonuses", () => {
    const cards = [
      { winningNumbers: 0 },
      { winningNumbers: 0 },
      { winningNumbers: 0 },
    ];

    expect(wonCards(cards)).toEqual(1 + 1 + 1);
  });
});
