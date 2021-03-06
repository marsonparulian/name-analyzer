// Tests for error cases in nameService
import crossFetch from "cross-fetch";
// Mock
jest.mock("cross-fetch");
import { analyzeNameForAge, analyzeNameForGender, analyzeNameForNationality } from "./nameService";

describe("Test error cases in nameService", () => {
    describe("Response return not  `ok`",
        () => {
            beforeAll(() => {
                // Mock response to return not `ok`
                crossFetch.mockResolvedValue({
                    ok: () => false,
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
            test("`analyzeNameForGender` function should reject", async () => {
                // Set up  spy to handle rejection. This will indicate whether a rejection has been thrown or not.
                const errorHandlerSpy = jest.fn();

                // Execute and wait until finish (The Promise is rejected). Then catch with the handler
                await analyzeNameForGender("Abraham").catch(errorHandlerSpy);

                // Verify the handler only called once
                expect(errorHandlerSpy.mock.calls.length).toBe(1);
            });
            test("analyze name for nationality should reject", async () => {
                // Setup spy to detech if reject / error has been thrown by the service.
                const errorHandlerSpy = jest.fn();

                // Run request and wait until rejected
                await analyzeNameForNationality("Abas").catch(errorHandlerSpy);

                // Verify the rejection has been caught once.
                expect(errorHandlerSpy.mock.calls.length).toBe(1);
            });
        });
    // Test if some field(s) in response is null.
    describe("Response field is null", () => {
        test("Age  is null, should reject", async () => {
            // Mock response 
            crossFetch.mockResolvedValue({
                // Mimick the response is `ok`
                ok: true,
                // Mock `json` function
                json: () => ({
                    age: null,
                }),
            });

            // Setup spy  to handle rejection
            const rejectHandlerSpy = jest.fn();

            // Call the service
            await analyzeNameForAge("Watson").catch(rejectHandlerSpy);

            // Verify rejection is thrown once.
            expect(rejectHandlerSpy.mock.calls.length).toBe(1);
        });
        test("Gender is null, should reject", async () => {
            // Mock response returning gender = null
            crossFetch.mockResolvedValue({
                // Mimick the response is ok
                ok: true,
                // Mock the data returned by `json` method
                json: () => ({
                    gender: null,
                })
            });

            // Setup spy to catch rejection
            const rejectHandlerSpy = jest.fn();

            // Call the service
            await analyzeNameForGender("Duma").catch(rejectHandlerSpy);

            // Verify  the rejection happened once
            expect(rejectHandlerSpy.mock.calls.length).toBe(1);
        });
        test("country is null, should reject", async () => {
            // Mock response
            crossFetch.mockResolvedValue({
                // Mimick response is `ok`
                ok: true,
                // Mock response data
                json: () => ({
                    country: null,
                })
            });

            // Setup spy to handle rejection
            const rejectHandleSpy = jest.fn();

            // Call service
            await analyzeNameForNationality("Natasha").catch(rejectHandleSpy);

            // Verify the service has rejected]
            expect(rejectHandleSpy).toBeCalledTimes(1);
        });
    })
})
