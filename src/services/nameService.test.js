// Tests for nameService
import crossFetch from "cross-fetch";
import { analyzeNameForAge, analyzeNameForGender, analyzeNameForNationality } from "./nameService";

describe("Test for nameService", () => {
    describe("Age predictor", () => {
        test("Should be resolved with object containing `age`", () => {
            const dataPromise = analyzeNameForAge("potter");
            const expectedData = expect.objectContaining({
                age: expect.any(Number),
            });
            return expect(dataPromise).resolves.toEqual(expectedData);
        })
    });
});
