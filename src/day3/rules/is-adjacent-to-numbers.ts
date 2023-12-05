import { Number } from "../parse/read-line-numbers.ts";
import { SpecialCharacter } from "../parse/read-line-special-characters.ts";

export const isAdjacentToNumbers =
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
