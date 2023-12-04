import { isNumber } from "./is-number.ts";

export type Number = { value: number; x: number; y: number };
type ParsedElement = { value: string; x: number; y: number };

export const readLineNumbers = (line: string, y: number): Number[] =>
  [...line]
    .map((value, index): ParsedElement => ({ value, x: index, y }))
    .filter(({ value }) => value !== ".")
    .filter(({ value }) => isNumber(value))
    .reduce((accumulator: ParsedElement[], next: ParsedElement) => {
      const [previous, ...rest] = accumulator;
      return isAdjacent(previous, next)
        ? [combineAdjacentNumbers(previous, next), ...rest]
        : [next, ...accumulator];
    }, [])
    .map(({ value, x, y }) => ({ value: Number(value), x, y }))
    .toReversed();

const isAdjacent = (first: ParsedElement | undefined, second: ParsedElement) =>
  (first?.x ?? -Infinity) + 1 === second.x;

const combineAdjacentNumbers = (
  first: ParsedElement,
  second: ParsedElement,
): ParsedElement => ({
  value: first.value + second.value,
  x: first.x,
  y: first.y,
});
