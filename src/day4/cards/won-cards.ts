type Card = { winningNumbers: number };

const computeNextCardBonuses = (
  nextCardsBonuses: number[],
  numberOfWinningCards: number,
  bonusCards: number,
) =>
  nextCardsBonuses
    .map((bonus) => numberOfWinningCards-- ? bonus + bonusCards + 1 : bonus);

export const wonCards = (cards: Card[], bonuses?: number[]): number => {
  if (cards.length === 0) {
    return 0;
  }
  const [{ winningNumbers }, ...rest] = cards;
  const [bonusCards, ...currentNextCardBonuses] = bonuses ??
    new Array(cards.length).fill(0);
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
