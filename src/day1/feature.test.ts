import {describe, expect, it} from "../deps.ts";

const calibrate = (s: string) => 12;

describe("calibration", () => {
    it("calibrates 1abc2 to 12", () => {
        expect(calibrate('1abc2')).toBe(12);
    });
});
