// Reducer for <ResultAge /> state
import cloneDeep from "lodash/cloneDeep";
import texts from "../../../configs/texts";
import defaultState from "./resultAgeDefault";

const reducer = (state = null, action) => {
    switch (action.type) {

        case defaultState:
            return state;
    }
}
export default reducer;
