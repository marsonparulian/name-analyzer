// Actions for <InputForm />
import actionTypes from "../../actionTypes";

/**
 * Update the name input
 */
export const updateNameInput = (value) => {
    return {
        type: actionTypes.UPDATE_NAME_INPUT,
        payload: value,
    }
}
