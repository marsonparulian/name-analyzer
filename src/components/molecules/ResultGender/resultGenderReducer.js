// <ResultGender /> state reducer
import cloneDeep from "lodash/cloneDeep";
import actionTypes from "../../actionTypes";
import texts from "../../../configs/texts";

const reducer = (state = null, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.ANALYZE_GENDER_ERROR:
            newState = cloneDeep(state);

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
