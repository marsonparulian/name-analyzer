// Tests for <InputFormContainer />
import cloneDeep from "lodash/cloneDeep";
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../store";
import texts from "../../../configs/texts";
import InputFormContainer from "./InputFormContainer";
import { set } from "lodash";

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
            submitButton,
            defaultState: cloneDeep(store.getState()),
        };
    }
    test("Default components and the state", () => {
        const { nameInput, submitButton } = setup();

        // NameInput value should be empty
        expect(nameInput).toHaveAttribute("value", "");

        // Submit button should be disabled
        expect(submitButton).toHaveAttribute("disabled");
    });
    test("User edit the name input", () => {
        const { nameInput } = setup();

        // User type a character
        userEvent.type(nameInput, "k");

        // name input value should have updated with the character
        expect(nameInput).toHaveAttribute("value", "k");

        // User delete the character
        userEvent.type(nameInput, "{backspace}");

        // Name input value should be empty string
        expect(nameInput).toHaveAttribute("value", "");

        // User typea word
        userEvent.type(nameInput, "Ivanka");

        // Verify the name input's value
        expect(nameInput).toHaveAttribute("value", "Ivanka");
    });
    test("User type a name & submit form", () => {
        const { nameInput, submitButton, defaultState: expectedState } = setup();
        const aName = "Roger";
        // User clear the name input
        userEvent.clear(nameInput);
        // User type in a name
        userEvent.type(nameInput, aName);

        // User press submit button
        userEvent.click(submitButton);

        // name input should not change
        expect(nameInput).toHaveAttribute("value", aName);

        // Start to compare state
        const currentState = store.getState();
        // Should modify `ResultPanel`
        expectedState.resultPanel.msg = "";
        expect(currentState.resultPanel).toEqual(expectedState.resultPanel);
        console.log(store.getState());

        // Should modify `ResultByAge` state    
    });
});

