// Connect the <ResultAge /> 
import { connect } from "react-redux"
import ResultAge from "./ResultAge"

// Tap in to the application state
const mapStateToProps = (state) => {
    return state.resultAge;
};

// Connect
export default connect(mapStateToProps)(ResultAge);
