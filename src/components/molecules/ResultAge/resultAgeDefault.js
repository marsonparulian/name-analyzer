// Default state for <ResultAge />
const defaultState = {
    // Status for result. Possibilities: `ok`, `error`.
    status: "ok",
    // Message to show when `busy` or `error`. If not falsy, the component will show this message.
    msg: "",
    // The predicted age
    age: null,
}
export default defaultState;
