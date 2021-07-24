import { render, screen } from "@testing-library/react"
import resultGenderDefault from "./resultGenderDefault";
import ResultGender, { resultGenderOkText } from "./ResultGender";

// Test for <ResultGender />
describe("<ResultGender /> ", () => {
    test("Rendered with default state", () => {
        // Render
        render(
            <ResultGender {...resultGenderDefault} />
        )

        // Should display nothing
        expect(screen.queryByText(/.+/)).not.toBeInTheDocument();
    })
    test("Rendered with `busy` message", () => {
        // Render with message
        const msg = "Predicting gender..";
        render(
            <ResultGender {...Object.assign({}, resultGenderDefault, { msg })} />
        );

        // Should display the message
        expect(screen.queryByText(msg)).toBeInTheDocument();
    });
    test("rendered with predicted gender", () => {
        // Render with `gender`
        const gender = "male";
        render(
            <ResultGender {...Object.assign({}, resultGenderDefault, { gender })} />
        );

        // Should display the gender
        const expectedElement = screen.queryByText(resultGenderOkText(gender));
        expect(expectedElement).toBeInTheDocument();
    });
})
