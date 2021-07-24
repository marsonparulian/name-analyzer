import React from "react";
import ProptTypes from "prop-types";
import texts from "../../../configs/texts";

/**
 * Create text to display predicted gender
 */
export const resultGenderOkText = (gender) => {
    return `${texts.RESULT_GENDER_OK_PRE_TEXT}${gender}`;
}

/**
 * Component to show the predicted gender
 */
const ResultGender = (props) => {
    // Is messsage available ?
    if (props.msg) {
        // Display message 
        return <p>{props.msg}</p>
    } else if (props.gender) {
        // Display gender
        return <p>{resultGenderOkText(props.gender)}</p>
    }

    // Default
    return null;
}
ResultGender.proptTypes = {
    // Possible values : `ok`, `error`
    status: ProptTypes.string.isRequired,
    //First priority to display
    msg: ProptTypes.string.isRequired,
    // The predicted gender. Second priority to display
    gender: ProptTypes.string.isRequired,
}
export default ResultGender;
