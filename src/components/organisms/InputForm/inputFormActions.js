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
/**
 * Action creator. Submit input form.
 */
export const submitInputForm = (data) => {
    return {
        type: actionTypes.SUBMIT_INPUT_FORM,
        payload: data,
    }
}
