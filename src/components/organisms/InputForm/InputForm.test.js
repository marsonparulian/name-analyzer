import React from "react";
import reactTestUtils from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import cloneDeep from "lodash/cloneDeep";
import texts from "../../../configs/texts";
import InputForm from "./InputForm";
import inputFormDefault from "./inputFormDefault";

// Behaviour test for <InputForm />
describe("<InputForm /> behaviour tests", () => {
    describe("Initial state", () => {
        // Setup spies
        let handleNameChangeSpy = jest.fn();
        let handleSubmitSpy = jest.fn();
        beforeEach(() => {

            // Render
            render(
                <InputForm
                    {...inputFormDefault}
                    onNameChange={handleNameChangeSpy}
                    onSubmit={handleSubmitSpy}
                />
            );
        });
        test("Check initial elements and states", () => {
            // Should be only 1 name input
            expect(screen.getAllByPlaceholderText(texts.NAME_INPUT_PLACEHOLDER).length).toBe(1);

            // Name input should be empty
            expect(screen.getByPlaceholderText(texts.NAME_INPUT_PLACEHOLDER).value).toBe("");

            // Should only 1 submit button
            expect(screen.getAllByText(texts.SUBMIT_BUTTON_TEXT).length).toBe(1);

            // Submit button should be disabled
            expect(screen.getByText(texts.SUBMIT_BUTTON_TEXT).closest("button")).toHaveAttribute("disabled");
        });
        test("User type in a name and delete the name", () => {
            let aName = "Nino";
            const nameInput = screen.getByPlaceholderText(texts.NAME_INPUT_PLACEHOLDER);

            // User type in 
            fireEvent.change(nameInput, { target: { value: aName } });

            // `props.onNameChange` should be called once
            expect(handleNameChangeSpy.mock.calls.length).toBe(1);

            // `props.onNameChange` should be called with the typed name as param
            expect(handleNameChangeSpy.mock.calls[0][0]).toBe(aName);

            // User delete the name
            // Note: Somehow `fireEvent.change` or `userEvent.clear` do not fire input's `onChange` The workaround is use react test-utils `Simulate.change`.
            nameInput.value = "";
            reactTestUtils.Simulate.change(nameInput);

            // `props.onNameChange` should be called twice
            expect(handleNameChangeSpy.mock.calls.length).toBe(2);

            // `props.onNameChange` should be called with empty string as param
            expect(handleNameChangeSpy.mock.calls[1][0]).toBe("");
        });
        test("User type in a name and press 'Enter'", () => {
            const nameInput = screen.getByPlaceholderText(texts.NAME_INPUT_PLACEHOLDER);
            // User hit 'Enter'
            userEvent.type(nameInput, "{enter}");

            // `onSubmit` should not be called
            expect(handleSubmitSpy.mock.calls.length).toBe(0);
        });
        test("User type in a ame and press 'Submit' button", () => {
            const nameInput = screen.getByPlaceholderText(texts.NAME_INPUT_PLACEHOLDER);
            // User type a name
            userEvent.type(nameInput, "Andy");

            // `onNameChange` should be called 
            expect(handleNameChangeSpy.mock.calls.length).toBe(4); // "Andy" is 4 key strokes.

            // User press submit button
            const submitButton = screen.getByText(texts.SUBMIT_BUTTON_TEXT).closest("button");
            userEvent.click(submitButton);

            // Submit button should still be disabled
            expect(submitButton).toHaveAttribute("disabled");

            // `onSubmit` should not be called
            expect(handleSubmitSpy.mock.calls.length).toBe(0);
        });
    });
    describe("Render with pre existing `name`,", () => {
        // Setup spies
        let handleNameChangeSpy = jest.fn(() => true);
        let handleSubmitSpy = jest.fn();
        beforeEach(() => {
            // Prepare the state
            const newState = cloneDeep(inputFormDefault);
            newState.nameInput.value = "Richard";

            // Render
            render(
                <InputForm
                    {...newState}
                    onNameChange={handleNameChangeSpy}
                    onSubmit={handleSubmitSpy}
                />
            );
        });
        test("Check initial elements and states", () => {
            // `name` input value should be as supplied in props
            expect(screen.getByPlaceholderText(texts.NAME_INPUT_PLACEHOLDER)).toHaveAttribute("value", "Richard");
            // Submit button should be not disabled
            expect(screen.getByText(texts.SUBMIT_BUTTON_TEXT).closest("button")).not.toHaveAttribute("disabled");
        });
        test("User hit 'Submit' button')", () => {
            const nameInput = screen.getByPlaceholderText(texts.NAME_INPUT_PLACEHOLDER);
            const nameInputValue = nameInput.value;
            const submitButton = screen.getByText(texts.SUBMIT_BUTTON_TEXT).closest("button");

            // User press submit button
            userEvent.click(submitButton);

            // nameInput value should not changed
            expect(nameInputValue).toBe(nameInput.value);

            //`onNameChange` should not has been called
            expect(handleNameChangeSpy.mock.calls.length).toBe(0);

            // `onSubmit` should have been called once, with param the name input value.
            expect(handleSubmitSpy.mock.calls.length).toBe(1);
            expect(handleSubmitSpy.mock.calls[0][0]).toBe(nameInputValue);

        });
        test("User try to remove the name", () => {
            const nameInput = screen.getByPlaceholderText(texts.NAME_INPUT_PLACEHOLDER);
            const submitButton = screen.getByText(texts.SUBMIT_BUTTON_TEXT).closest("button");

            // User try to remove the name fom input
            nameInput.value = "";
            reactTestUtils.Simulate.change(nameInput);

            // `handleNameChange` should be called once
            expect(handleNameChangeSpy.mock.calls.length).toBe(1);

        });
    });
});
