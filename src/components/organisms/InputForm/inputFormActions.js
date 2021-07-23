// Actions for <InputForm />
import actionTypes from "../../actionTypes";
import { analyzeNameForAge } from "../../../services/nameService";

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
    return (dispatch) => {
        dispatch(submitFormStarted());

        // Analyze name for age
        analyzeNameForAge(data)
            .then(result => {
                dispatch(submitFormOk(result.age));
            }).catch(e => {
                dispatch(submitFormError());
            });
    }
}
const submitFormStarted = () => {
    return {
        type: actionTypes.SUBMIT_INPUT_FORM,
    }
}
const submitFormOk = (age) => {
    return {
        type: actionTypes.SUBMIT_INPUT_FORM_OK,
        payload: age,
    }
}
const submitFormError = () => {
    return {
        type: actionTypes.SUBMIT_INPUT_FORM_ERROR,
    }
}
