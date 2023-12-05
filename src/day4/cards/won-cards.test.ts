import { describe, expect, it } from "../../deps.ts";

type Card = { winningNumbers: number };
const wonCards = (
  cards: Card[],
  bonuses: number[] = new Array(20).fill(0),
): number => {
  if (cards.length === 0) {
    return 0;
  }
  const [firstCard, ...rest] = cards;
  const [firstBonus, ...otherBonuses] = bonuses;
  const nextBonuses = otherBonuses.map((bonus) =>
    firstCard.winningNumbers-- ? bonus + 1 : bonus
  );
  return firstBonus + 1 + wonCards(rest, nextBonuses);
};

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

    expect(wonCards(cards)).toEqual(2);
  });

  it("have three cards when the first card have one winning numbers", () => {
    const cards = [
      { winningNumbers: 1 },
      { winningNumbers: 0 },
    ];

    expect(wonCards(cards)).toEqual(3);
  });

  it("does not overflow winning cards", () => {
    const cards = [
      { winningNumbers: 2 },
      { winningNumbers: 0 },
    ];

    expect(wonCards(cards)).toEqual(3);
  });

  it("count bonuses from the copy of the second card", () => {
    const cards = [
      { winningNumbers: 2 },
      { winningNumbers: 0 },
      { winningNumbers: 0 },
    ];

    expect(wonCards(cards)).toEqual(5);
  });
});
