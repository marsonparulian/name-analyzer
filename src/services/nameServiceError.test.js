// Tests for error cases in nameService
import crossFetch from "cross-fetch";
// Mock
jest.mock("cross-fetch");
import { analyzeNameForAge, analyzeNameForGender, analyzeNameForNationality } from "./nameService";

describe("Test erro cases in nameService", () => {
    describe("Response return not  `ok`", () => {
        beforeAll(() => {
            // Mock response to return not `ok`
            crossFetch.mockResolvedValue({
                status: 400, // mocking not `ok` : HTTP code 400
            });
        });
        test("analyzeNameForAge should reject", async () => {
            // Create spy
            const errorHandler = jest.fn();

            // Execute and wait for service to finish
            await analyzeNameForAge("Saha").catch(errorHandler);

            // Error handle should be called once
            expect(errorHandler.mock.calls.length).toBe(1);
        });
    });
})
