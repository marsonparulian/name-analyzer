// Tests for <InputFormContainer />
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import store from "../../store";
import texts from "../../../configs/texts";
import InputFormContainer from "./InputFormContainer";

describe("<InputFormContainer /> with default state", () => {
    const setup = () => {
        render(
            <Provider store={store}>
                <InputFormContainer />
            </Provider>
        )

        // Get components
        const nameInput = screen.getByPlaceholderText(texts.NAME_INPUT_PLACEHOLDER);
        const submitButton = screen.getByText(texts.SUBMIT_BUTTON_TEXT).closest("button");

        return {
            nameInput,
            submitButton
        };
    }
    test("Default components and the state", () => {
        const { nameInput, submitButton } = setup();

        // NameInput value should be empty
        expect(nameInput).toHaveAttribute("value", "");

        // Submit button should be disabled
        expect(submitButton).toHaveAttribute("disabled");
    });
});
