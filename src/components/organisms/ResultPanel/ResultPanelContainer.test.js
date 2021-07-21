// Test for <ResultPanelContainer />
import { Provider } from "react-redux";
import store from "../../store";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import resultPanelDefault from "./resultPanelDefault";
import ResultPanelContainer from "./ResultPanelContainer";
import texts from "../../../configs/texts";

describe("<ResultPanelContainer /> with default state", () => {
    beforeEach(() => {
        render(
            <Provider store={store} >
                <ResultPanelContainer
                    {...resultPanelDefault}
                />
            </Provider>
        );
    })
    test("Check  components and the states", () => {
        // Should display the initial message
        expect(screen.getByText(texts.RESULT_PANEL_DEFAULT_MSG)).toBeInTheDocument();
    });
})
