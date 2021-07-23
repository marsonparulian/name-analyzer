// Test for <ResultAge />
import { render, screen } from "@testing-library/react";
import texts from "../../../configs/texts";
import resultAgeDefault from "./resultAgeDefault";
import ResultAge, { createResultText } from "./ResultAge";
import { create } from "lodash";

describe("<ResultAge /> ", () => {
    test("Default state, should display nothing", () => {
        render(
            <ResultAge {...resultAgeDefault} />
        );

        // Verify no text is displayed
        expect(screen.queryAllByText(/a/).length).toBe(0);
    });
    test("`msg` is set, should display `msg`", () => {
        const msg = "This is the mesage of the predicted age";
        render(
            <ResultAge {...Object.assign({}, resultAgeDefault, { msg })} />
        );

        // Verify the `msg` is shown
        expect(screen.getByText(msg)).toBeInTheDocument();
    });
    test.todo("`status`= `error` & ` msg` are set, should display `msg` with red text");
    test("`msg` is falsy, should show `age` with defined pre-text", () => {
        const age = 40;
        // Render
        render(
            <ResultAge {...Object.assign({}, resultAgeDefault, { age })} />
        );
        // Verify the `age is displayed
        const expectedText = createResultText(age, texts.RESULT_AGE_OK_PRE_TEXT);
        expect(screen.queryByText(expectedText)).toBeInTheDocument();
    });

});
