import { SpecialCharacter } from "./read-line-special-characters.ts";
import { Number } from "./read-line-numbers.ts";
import { Game } from "./read-game.ts";

const sum = (a: number, b: number) => a + b;

const isAdjacentToNumbers =
  (numbers: Number[]) => (specialCharacter: SpecialCharacter) => {
    const { x: specialCharacterX, y: specialCharacterY } = specialCharacter;
    return numbers
      .filter(({ x: numberX, y: numberY, value }) => {
        const numberSize = `${value}`.length;
        return numberX - 1 <= specialCharacterX &&
          numberX + numberSize >= specialCharacterX &&
          numberY + 1 >= specialCharacterY &&
          numberY - 1 <= specialCharacterY;
      });
  };

export const countValidNumbers = ({ numbers, specialCharacters }: Game) => {
  return specialCharacters
    .flatMap(isAdjacentToNumbers(numbers))
    .map(({ value }) => value)
    .reduce(sum, 0);
};
