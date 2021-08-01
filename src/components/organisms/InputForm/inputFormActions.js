// Actions for <InputForm />
import actionTypes from "../../actionTypes";
import { analyzeNameForAge, analyzeNameForGender } from "../../../services/nameService";

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
        dispatch(submitFormStarted(data));

        // Analyze name for age
        analyzeNameForAge(data)
            .then(result => {
                dispatch(analyzeAgeOk(result.age));
            }).catch(e => {
                dispatch(analyzeAgeError());
            });

        // Analyze gender
        analyzeNameForGender(data).then((result) => {
            dispatch(analyzeGenderOk(result.gender));
        }).catch(() => {
            dispatch(analyzeGenderError());
        });
    }
}
const submitFormStarted = (name) => {
    return {
        type: actionTypes.SUBMIT_INPUT_FORM,
        payload: {
            name,
        }
    }
}
const analyzeAgeOk = (age) => {
    return {
        type: actionTypes.ANALYZE_NAME_OK,
        payload: age,
    }
}
const analyzeAgeError = () => {
    return {
        type: actionTypes.ANALYZE_NAME_ERROR,
    }
}
const analyzeGenderOk = (gender) => {
    return {
        type: actionTypes.ANALYZE_GENDER_OK,
        payload: gender,
    }
}
const analyzeGenderError = () => {
    return {
        type: actionTypes.ANALYZE_GENDER_ERROR,
    }
}
