import React, { useCallback } from "react";
import PropTypes from "prop-types";
import texts from "../../../configs/texts";

/**
 * Form that ahndle input to analyze name
 */
const InputForm = (props) => {

    // Handle change in name input
    const onNameChange = props.onNameChange;
    const handleNameChange = useCallback((e) => {
        onNameChange(e.target.value);
    }, [onNameChange]);
    // Handle form submit
    const onSubmit = props.onSubmit;
    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        // Submit only if name not empty
        if (props.nameInput.value) onSubmit(props.nameInput.value);
    }, [props.nameInput.value, onSubmit]);

    return (
        <form id="input-form"
            onSubmit={handleSubmit}
        >

            <p className="text-center text-muted">Put in a name and we will predict..</p>

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
                            type="submit"
                            disabled={props.nameInput.value ? false : true}
                            className="btn btn-lg btn-primary"
                        >{texts.SUBMIT_BUTTON_TEXT}</button>
                    </div>
                </div>
            </div>
        </form >
    )
}

InputForm.propTypes = {
    nameInput: PropTypes.shape({
        value: PropTypes.string.isRequired,
    }).isRequired,
    onNameChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}
export default InputForm;
