type Card = { winningNumbers: number };
export const wonCards = (
  cards: Card[],
  bonuses: number[] = new Array(20).fill(0),
): number => {
  if (cards.length === 0) {
    return 0;
  }
  const [firstCard, ...rest] = cards;
  const [firstBonus, ...otherBonuses] = bonuses;
  const nextBonuses = otherBonuses
    .map((bonus) =>
      firstCard.winningNumbers-- ? bonus + firstBonus + 1 : bonus
    );
  return firstBonus + 1 + wonCards(rest, nextBonuses);
};
