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
                dispatch(analyzeAgeOk(result.age));
            }).catch(e => {
                dispatch(analyzeNameError());
            });
    }
}
const submitFormStarted = () => {
    return {
        type: actionTypes.SUBMIT_INPUT_FORM,
    }
}
const analyzeAgeOk = (age) => {
    return {
        type: actionTypes.ANALYZE_NAME_OK,
        payload: age,
    }
}
const analyzeNameError = () => {
    return {
        type: actionTypes.ANALYZE_NAME_ERROR,
    }
}
