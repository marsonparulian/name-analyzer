import React from "react";
import texts from "../../../configs/texts";

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
                    />
                    <div className="input-group-append">
                        <button
                            disabled
                        >{texts.SUBMIT_BUTTON_TEXT}</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default InputForm;
