// Store
import { combineReducers, applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";

// Import Reducers
import inputFormReducer from "./organisms/InputForm/inputFormReducer";
import resultPanelReducer from "./organisms/ResultPanel/resultPanelReducer"
import resultAgeReducer from "./molecules/ResultAge/resultAgeReducer";

// Import default state
import inputFormDefault from "./organisms/InputForm/inputFormDefault";
import resultPanelDefault from "./organisms/ResultPanel/resultPanelDefault";
import resultAgeDefault from "./molecules/ResultAge/resultAgeDefault";

// Root reducer
export const rootReducer = combineReducers({
    inputForm: inputFormReducer,
    resultPanel: resultPanelReducer,
    resultAge: resultAgeReducer,
});
// Default root state
export const defaultRootState = {
    inputForm: inputFormDefault,
    resultPanel: resultPanelDefault,
    resultAge, resultAgeDefault,
};
// Create store
const store = createStore(rootReducer, defaultRootState, applyMiddleware(reduxThunk));
export default store;
