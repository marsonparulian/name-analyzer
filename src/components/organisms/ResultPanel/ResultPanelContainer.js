// Connect <ResultPanel /> component
import { connect } from "react-redux";
import ResultPanel from "./ResultPanel";

// Tap to the application state
const mapStateToProps = (state) => {
    return state.resultPanel;
}

// Connect
export default connect(mapStateToProps)(ResultPanel);
