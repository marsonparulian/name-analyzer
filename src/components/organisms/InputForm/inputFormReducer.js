// Reducer for inputForm
import cloneDeep from "lodash/cloneDeep";
import actionTypes from "../../actionTypes";

const inputFormReducer = (state = null, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_NAME_INPUT:
            const newState = cloneDeep(state);

            // Update name input's value
            newState.nameInput.value = action.payload;

            return newState;

        default:
            return state;
    }
}
export default inputFormReducer;
