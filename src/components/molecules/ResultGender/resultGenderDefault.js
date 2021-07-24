// Default state form <ResultGender />

export default defaultState = {
    // Possible values: `ok`, `error`.
    status: 'ok',
    // If not falsy, will show this message. This message is used to show 'busy' or 'error' message
    msg: "",
    // The predicted gender
    gender: "",
}
