// Store
import { combineReducers, applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";

// Import Reducers
import inputFormReducer from "./organisms/InputForm/inputFormReducer";

// Import default state
import inputFormDefault from "./organisms/InputForm/inputFormDefault";

// Root reducer
export const rootReducer = combineReducers({
    inputForm: inputFormReducer,
});

// Default root state
export const defaultRootState = {
    inputForm: inputFormDefault,
};
// Create store
const store = createStore(rootReducer, defaultRootState, applyMiddleware(reduxThunk));
export default store;
