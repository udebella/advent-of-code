type Game = { playedNumbers: number[]; winningNumbers: number[] };
export const readLine = (line: string): Game => {
  const [, numbers] = line.split(":");
  const [winningNumbers, playedNumbers] = numbers.split("|");
  return {
    playedNumbers: readNumbers(playedNumbers),
    winningNumbers: readNumbers(winningNumbers),
  };
};

const readNumbers = (numbers: string) =>
  numbers.split(" ")
    .filter((string) => string !== "")
    .map(Number);
