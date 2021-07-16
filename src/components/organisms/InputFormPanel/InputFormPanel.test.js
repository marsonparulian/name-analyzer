// Tests for <InputFormPanel />
import React from "react";
import { render, screen } from "@testing-library/react";
import InputFormPanel from "./InputFormPanel";
import texts from "../../../configs/texts";

describe("Tests <InputFormPanel />", () => {
    describe("Methods", () => {
        test.todo("Should have `handleSubmit` method");
        test.todo("Should execute `preventDefault` of the first argument passed in `handleSubmit`)");
    });
    describe("Proptypes", () => {
        test.todo("Should have `propTypes.handleNameInputChange`");
        test.todo("Should have `propTypes.handleSubmit` prop");

    })
    describe("Default state is rendered", () => {
        beforeAll(() => {
            render(<InputFormPanel />);
        });

        describe("Name Input component", () => {
            test("Should have correct placeholder", () => {
                const inputs = screen.getAllByPlaceholderText(texts.NAME_INPUT_PLACEHOLDER);
                expect(inputs.length).toBe(1);
            });
        });

        describe("Submit button", () => {
            test.todo("Should have submit button with   'Analyze' text");
            test.todo("Submit button should be disabled");
        });
        describe("Name input is changed (user typed in)", () => {
            test.todo("Should execute `props.handleNameInputChange` when user type in name with the `name` as first argument");
        });
        describe("Submit button is activated", () => {
            test.todo("Should execute `handleSubmit` when submit button is clicked ")
            test.todo("Should execute `props.handleSubmit` ");
        })
    })
});
