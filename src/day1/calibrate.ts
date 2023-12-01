export const calibrate = (s: string) =>
  Number((s.split("").find((char) => !isNaN(Number(char))) ?? "") + s.at(-1));
