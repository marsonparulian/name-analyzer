// Services to analyze name
import crossFetch from "cross-fetch";

/**
 * Predict age based on a name.
 * @param {string} name - Name to be analyzed
 * @param {*} country - Optional. Country of origin to improve accuray. Uses ISO 3166-1 alpha-2.
 */
export const analyzeNameForAge = async (name, country = null) => {
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
