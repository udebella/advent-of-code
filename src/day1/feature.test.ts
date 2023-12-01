import {describe, expect, it} from "../deps.ts";
import {calibrate} from "./calibrate.ts";

describe("calibration", () => {
    it("calibrates 1abc2 to 12", () => {
        expect(calibrate('1abc2')).toBe(12);
    });

    it("calibrates 1abc3 to 13", () => {
        expect(calibrate('1abc3')).toBe(13);
    });

    it("calibrates 2abc3 to 23", () => {
        expect(calibrate('2abc3')).toBe(23);
    });
});
