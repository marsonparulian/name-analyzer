import React from "react";
import PropTypes from "prop-types";
import texts from "../../../configs/texts";
import { PROPERTY_TYPES } from "@babel/types";

/**
 * Form that ahndle input to analyze name
 */
const InputForm = (props) => {
    return (
        <form id="input-form" >
            <div className="form-row">
                <div className="input-group input-group-lg">
                    <input
                        type="text"
                        placeholder={texts.NAME_INPUT_PLACEHOLDER}
                        className="form-control form-control-lg"
                        value={props.nameInput.value}
                        onChange={() => null}
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
    handleNameChange: PropTypes.func.isRequired,
}
export default InputForm;
