// Reducer for <ResultAge /> state
import cloneDeep from "lodash/cloneDeep";
import actionTypes from "../../actionTypes";
import texts from "../../../configs/texts";
import resultAgeDefault from "./resultAgeDefault";
import { clone } from "@babel/types";

const reducer = (state = null, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.SUBMIT_INPUT_FORM_OK:
            newState = cloneDeep(state);

            // Clear the message
            newState.msg = "";// Assign the age
            // Assign the result
            newState.age = action.payload;

            return newState;

        case actionTypes.SUBMIT_INPUT_FORM:
            newState = cloneDeep(state);

            // Set the message
            newState.msg = texts.RESULT_AGE_BUSY_TEXT;
            // Reset the age
            newState.age = resultAgeDefault.age;

            return newState;

        default:
            return state;
    }
}
export default reducer;
