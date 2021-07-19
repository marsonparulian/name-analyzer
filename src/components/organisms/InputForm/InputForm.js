import React, { useCallback } from "react";
import PropTypes from "prop-types";
import texts from "../../../configs/texts";
import { PROPERTY_TYPES } from "@babel/types";

/**
 * Form that ahndle input to analyze name
 */
const InputForm = (props) => {

    // Handle change in name input
    const handleNameChange = useCallback((e) => {
        console.log("Handling name change")
        props.onNameChange(e.target.value);
    }, [props.onNameChange]);

    return (
        <form id="input-form" >
            <div className="form-row">
                <div className="input-group input-group-lg">
                    <input
                        type="text"
                        placeholder={texts.NAME_INPUT_PLACEHOLDER}
                        className="form-control form-control-lg"
                        value={props.nameInput.value}
                        onChange={handleNameChange}
                    />
                    <div className="input-group-append">
                        <button
                            disabled={props.nameInput.value ? false : true}
                        >{texts.SUBMIT_BUTTON_TEXT}</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

InputForm.propTypes = {
    nameInput: PropTypes.shape({
        value: PropTypes.string.isRequired,
    }).isRequired,
    onNameChange: PropTypes.func.isRequired,
}
export default InputForm;
