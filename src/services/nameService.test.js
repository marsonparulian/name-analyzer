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
    describe("gender predictor ", () => {
        test("Response should  be an object containing `gender` property", async () => {
            // Expectation
            const expected = expect.objectContaining({
                gender: expect.any(String),
            })

            // Make request
            const result = await analyzeNameForGender("Freddy").catch(e => console.error(e));

            // Verify the response is an object containing `gender` property.
            expect(result).toEqual(expected);
        });
    });
});
