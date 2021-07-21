// Test file for <NameAnalyzerPage />
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../store";
import texts from "../../configs/texts";
import NameAnalyzerPage from "./NameAnalyzerPage";

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
})
