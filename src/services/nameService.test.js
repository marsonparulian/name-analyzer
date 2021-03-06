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
        test("Response should  be an object containing `gender` property", () => {
            // Expectation
            const expected = expect.objectContaining({
                gender: expect.any(String),
            })

            // Make request
            const service = analyzeNameForGender("Freddy").catch(e => console.error(e));

            // Verify the response is an object containing `gender` property.
            return expect(service).resolves.toEqual(expected);
        });
    });
    describe("Nationality predictor", () => {
        test("Response should be an object containing `country` with array of object", () => {
            // Expectation
            const expected = expect.objectContaining({
                country: expect.arrayContaining([
                    expect.objectContaining({
                        country_id: expect.any(String),
                        probability: expect.any(Number),
                    })
                ])
            })

            // Run the service and wait for the result.
            const service = analyzeNameForNationality("Farida").catch(e => console.error(e));

            // Verify the result is an object containing `nationality` prop.
            return expect(service).resolves.toEqual(expected);
        });
    });
});
