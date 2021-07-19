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
        beforeEach(() => {

            // Render
            render(
                <InputForm
                    {...inputFormDefault}
                    onNameChange={handleNameChangeSpy}
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
        test.todo("User type in a name and press 'Enter'");
        test.todo("User type in a name and press 'Submit' button");

    });
    describe("Render with pre existing `name`,", () => {
        beforeEach(() => {
            // Prepare the state
            const newState = cloneDeep(inputFormDefault);
            newState.nameInput.value = "Richard";

            // Setup spies
            const handleNameChangeSpy = jest.fn(() => true);

            // Render
            render(
                <InputForm
                    {...newState}
                    onNameChange={handleNameChangeSpy}
                />
            );
        });
        test("Check initial elements and states", () => {
            // `name` input value should be as supplied in props
            expect(screen.getByPlaceholderText(texts.NAME_INPUT_PLACEHOLDER)).toHaveAttribute("value", "Richard");
            // Submit button should be not disabled
            expect(screen.getByText(texts.SUBMIT_BUTTON_TEXT).closest("button")).not.toHaveAttribute("disabled");
        });
        test.todo("User hit 'Submit' button')");
        test.todo("User remove the name");
        test.todo("User replace the name and press 'Enter'");
    });
});
