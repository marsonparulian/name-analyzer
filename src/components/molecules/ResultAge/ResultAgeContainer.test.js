// Test for <ResultAgeContainer />
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../store";
import ResultAgeContainer from "./ResultAgeContainer";
describe("<ResultAgeContainer /> with default state", () => {
    // Shared variables between tests
    let nameInput, submitButton;
    beforeEach(() => {
        // Render
        render(
            <Provider store={store}>
                <ResultAgeContainer />
            </Provider>
        )
    });
    test("Initial message", () => {
        // Should display nothing

    })
});

