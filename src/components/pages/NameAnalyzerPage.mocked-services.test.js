// Text <AnalyzeNamePage /> with mocked services
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../store";
import texts from "../../configs/texts";
import NameAnalyzerPage from "./NameAnalyzerPage";
// Mock services
import { analyzeNameForAge } from "../../services/nameService";
jest.mock("../../services/nameService");

describe("Test <NameAnalyzerPage /> with mocked services ", () => {
    // Shared Element
    let nameInput, submitButton;
    beforeEach(() => {
        render(
            <Provider store={store}>
                <NameAnalyzerPage />
            </Provider>
        )

        // Query elements
        nameInput = screen.getByPlaceholderText(texts.NAME_INPUT_PLACEHOLDER)
        submitButton = screen.getByRole("button", { name: texts.SUBMIT_BUTTON_TEXT });
    });
    test("User type in a name & click submit button", async () => {
        // Mock services to reject. Must be defined in this `test` scope.
        analyzeNameForAge.mockImplementation(() => Promise.reject());

        const aName = "Abigail";
        // User type in a name
        userEvent.type(nameInput, aName);

        // Click submit button
        userEvent.click(submitButton);

        // Results should show 'busy' messages'
        expect(screen.getByText(texts.RESULT_AGE_BUSY_TEXT)).toBeInTheDocument();

        // Result by age should show error messsage
        const resultAgeText = await screen.findByText(texts.RESULT_AGE_ERROR_TEXT);
        expect(resultAgeText).toBeInTheDocument();


    })
});
