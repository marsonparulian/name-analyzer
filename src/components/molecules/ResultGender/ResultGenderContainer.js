// Connect the <ResultGender /> component
import { connect } from "react-redux";
import ResultGender from "./ResultGender";

// Tapt into application state
const mapStateToProps = (state) => {
    return state.resultGender;
}

// Connect
export default connect(mapStateToProps)(ResultGender);
