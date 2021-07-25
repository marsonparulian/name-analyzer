// <ResultGender /> state reducer
import cloneDeep from "lodash/cloneDeep";
import actionTypes from "../../actionTypes";
import texts from "../../../configs/texts";
import resultGenderDefault from "./resultGenderDefault";

const reducer = (state = null, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.ANALYZE_GENDER_OK:
            newState = cloneDeep(resultGenderDefault);

            // Set the gender
            newState.gender = action.payload;

            return newState;

        case actionTypes.ANALYZE_GENDER_ERROR:
            // Reset the state
            newState = cloneDeep(resultGenderDefault);

            // Set error message
            newState.msg = texts.RESULT_GENDER_ERROR_TEXT;

            return newState;

        case actionTypes.SUBMIT_INPUT_FORM:
            newState = cloneDeep(state);

            // Set the message
            newState.msg = texts.RESULT_GENDER_BUSY_TEXT;

            return newState;

        default:
            return state;
    }
}
export default reducer;
