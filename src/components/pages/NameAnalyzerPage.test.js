// Test file for <NameAnalyzerPage />
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../store";
import texts from "../../configs/texts";
import NameAnalyzerPage from "./NameAnalyzerPage";
import { createResultText } from "../molecules/ResultAge/ResultAge";

describe("<NameAnalyzerPage /> with default state", () => {
    // Shared elements
    let nameInput, submitButton;
    beforeEach(() => {
        render(
            <Provider store={store}>
                <NameAnalyzerPage />
            </Provider>
        );
        // Get the elements;
        nameInput = screen.getByPlaceholderText(texts.NAME_INPUT_PLACEHOLDER);
        submitButton = screen.getByText(texts.SUBMIT_BUTTON_TEXT).closest("button");
    })
    test("Verify elements and their state", () => {
        // The result panel should display the initial message
        expect(screen.queryByText(texts.RESULT_PANEL_DEFAULT_MSG)).toBeInTheDocument();
    })
    test("User type in name & click submit button", async () => {
        const aName = "Astrid";
        // User type in a name
        userEvent.type(nameInput, aName);

        // User click submit button
        userEvent.click(submitButton);

        // Initial result message should not be displayed.
        expect(screen.queryByText(texts.RESULT_PANEL_DEFAULT_MSG)).not.toBeInTheDocument();

        // Verify all the `busy` messages are displayed
        expect(screen.queryByText(texts.RESULT_AGE_BUSY_TEXT)).toBeInTheDocument();

        // Verify the result age
        const resultAgeTextRegex = new RegExp(`.*${texts.RESULT_AGE_OK_PRE_TEXT}*`, "i");
        const resultAgeText = await screen.findByText(resultAgeTextRegex, {}, { timeout: 4000 });
        expect(resultAgeText).toBeInTheDocument();
    });
});
