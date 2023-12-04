import { SpecialCharacter } from "./read-line-special-characters.ts";
import { Number } from "./read-line-numbers.ts";
import { Game } from "./read-game.ts";

const sum = (a: number, b: number) => a + b;

const isAdjacentToSpecialCharacter =
  (specialCharacters: SpecialCharacter[]) => (number: Number) => {
    const { x: numberX, y: numberY, value } = number;
    const numberSize = `${value}`.length;
    return specialCharacters
      .find(({ x: specialCharacterX, y: specialCharacterY }) =>
        numberX - 1 <= specialCharacterX &&
        numberX + numberSize >= specialCharacterX &&
        numberY + 1 >= specialCharacterY &&
        numberY - 1 <= specialCharacterY
      );
  };

export const countValidNumbers = ({ numbers, specialCharacters }: Game) => {
  return numbers
    .filter(isAdjacentToSpecialCharacter(specialCharacters))
    .map(({ value }) => value)
    .reduce(sum, 0);
};
