type Card = { winningNumbers: number };

function computeNextCardBonuses(
  nextCardsBonuses: number[],
  numberOfWinningCards: number,
  bonusCards: number,
) {
  return nextCardsBonuses
    .map((bonus) => numberOfWinningCards-- ? bonus + bonusCards + 1 : bonus);
}

export const wonCards = (
  cards: Card[],
  bonuses: number[] = new Array(cards.length).fill(0),
): number => {
  if (cards.length === 0) {
    return 0;
  }
  const [{ winningNumbers }, ...rest] = cards;
  const [bonusCards, ...currentNextCardBonuses] = bonuses;
  return bonusCards + 1 +
    wonCards(
      rest,
      computeNextCardBonuses(
        currentNextCardBonuses,
        winningNumbers,
        bonusCards,
      ),
    );
};
