// Reducer for <ResultPanel /> state
import cloneDeep from "lodash/cloneDeep";
import actionTypes from "../../actionTypes";
const reducer = (state = null, action) => {
    switch (action.type) {
        case actionTypes.SUBMIT_INPUT_FORM:
            const newState = cloneDeep(state);

            // Clear the `msg` to mark the form has been submitted
            newState.msg = "";

            return newState;

        default:
            return state;
    }
}
export default reducer;
