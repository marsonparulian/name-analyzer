import React from "react";
import propTypes from "prop-types";
import InputForm from "../InputForm/InputForm";

/**
 * Contain all components related to input handling.
 * This is where most of the logic happen.
 */
class InputFormPanel extends React.Component {
    render() {
        return (
            <div id="input-form-panel">
                <InputForm
                />
            </div>
        )
    }
}

export default InputFormPanel;
