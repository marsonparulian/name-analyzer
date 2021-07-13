// Services to analyze name
import crossFetch from "cross-fetch";

/**
 * Predict age based on a name.
 * @param {string} name - Name to be analyzed
 * @param {*} country - Optional. Country of origin to improve accuray. Uses ISO 3166-1 alpha-2.
 */
export const analyzeNameForAge = async (name, country = null) => {
    // Note: Country codes can be found in https://agify.io/our-data

    // Determine the end point query params
    let url = `https://api.agify.io?name=${name}`;
    if (country) {
        url = url + `&country_id=${country}`;
    }

    // Send request
    const response = await crossFetch(url);
    if (response.ok) {
        return await response.json();
    }

    // Return error
    return Promise.reject("Something wrong when predict the age");
}
/**
 * Predict gender based on given name.
 * @param {string} name - Name to predict the gender.
 * @return {object} - Result  object with keys : `name`, `gender`, `probability`, and `count`.
 */
export const analyzeNameForGender = async (name) => {
    // End point
    const url = `https://api.genderize.io?name=${name}`;

    // Request
    const response = await crossFetch(url);

    // Return
    if (!response.ok) {
        return Promise.reject("Error when analyzing name for gender.");
    }
    return await response.json();
}
/**
 * Analyze a single word name and predict the nationality.
 * @param {string} name - Single word name for prediction.
 * @return {object  } - Object containing the result.
 */
export const analyzeNameForNationality = async (name) => {
    // End point
    const url = `https://api.nationalize.io?name=michael`;

    // Request
    const response = await crossFetch(url);

    // Response
    if (!response.ok) {
        return Promise.reject("Error when analyzing name for nationality.");
    }
    return response.json();
}
