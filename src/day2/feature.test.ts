import {describe, expect, it} from "../deps.ts";

const isGamePossible = (param: { red: number }) => {
return false
};

describe('Day 2', () => {
    it('is not possible when displaying more than 12 red cubes', () => {
        expect(isGamePossible({red: 13})).toBe(false)
    });
});