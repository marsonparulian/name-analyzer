import { render, screen } from "@testing-library/react";
import cloneDeep from "lodash/cloneDeep";
import texts from "../../../configs/texts";
import InputForm from "./InputForm";
import inputFormDefault from "./inputFormDefault";

// Behaviour test for <InputForm />
describe("<InputForm /> behaviour tests", () => {
    describe("Initial state", () => {
        beforeEach(() => {
            render(
                <InputForm
                    {...inputFormDefault}
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
        test.todo("User type in a name and delete the name");
        test.todo("User type in a name and press 'Enter'");
        test.todo("User type in a name and press 'Submit' button");

    });
    describe("Render with pre existing `name`,", () => {
        beforeEach(() => {
            // Prepare the state
            const newState = cloneDeep(inputFormDefault);
            newState.nameInput.value = "Richard";

            // Render
            render(
                <InputForm {...newState} />
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
