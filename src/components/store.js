// Store
import { combineReducers, applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";

// Import Reducers
import inputFormReducer from "./organisms/InputForm/inputFormReducer";
import resultPanelReducer from "./organisms/ResultPanel/resultPanelReducer"

// Import default state
import inputFormDefault from "./organisms/InputForm/inputFormDefault";
import resultPanelDefault from "./organisms/ResultPanel/resultPanelDefault";

// Root reducer
export const rootReducer = combineReducers({
    inputForm: inputFormReducer,
    resultPanel: resultPanelReducer,
});

// Default root state
export const defaultRootState = {
    inputForm: inputFormDefault,
    resultPanel: resultPanelDefault,
};
// Create store
const store = createStore(rootReducer, defaultRootState, applyMiddleware(reduxThunk));
export default store;
