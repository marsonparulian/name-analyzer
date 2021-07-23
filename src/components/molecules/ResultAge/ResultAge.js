import React from "react";
import PropTypes from "prop-types";
import texts from "../../../configs/texts";
/**
 * Create text to show the result age.
 */
export const createResultText = (age, preText) => {
    return `${preText}${age}`;
}

/**
 *  Component to show predicted age
 */
const ResultAge = (props) => {

    // Show `msg` if not falssy.
    if (props.msg) {
        return <p>{props.msg}</p>
    } else if (props.age) {
        return <p>{createResultText(props.age, texts.RESULT_AGE_OK_PRE_TEXT)}</p>
    }

    // Default
    return null;
}
ResultAge.propTypes = {
    // Status of the process. Possible values : `ok`, `error`.
    status: PropTypes.string.isRequired,
    // Message to show when `busy` (predicting process is running) or `error` (predicting process is error).
    msg: PropTypes.string.isRequired,
    // The predicted age.
    age: PropTypes.number.isRequired,
}
export default ResultAge;
