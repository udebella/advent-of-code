type Card = { winningNumbers: number };
export const wonCards = (
  cards: Card[],
  bonuses: number[] = new Array(cards.length).fill(0),
): number => {
  if (cards.length === 0) {
    return 0;
  }
  const [firstCard, ...rest] = cards;
  const [bonusCards, ...nextCardsBonuses] = bonuses;
  const nextBonuses = nextCardsBonuses
    .map((bonus) =>
      firstCard.winningNumbers-- ? bonus + bonusCards + 1 : bonus
    );
  return bonusCards + 1 + wonCards(rest, nextBonuses);
};
