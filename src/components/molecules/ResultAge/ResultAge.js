import React from "react";
import PropTypes from "prop-types";
import texts from "../../../configs/texts";
/**
 *  Component to show predicted age
 */
const ResultAge = (props) => {

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
