import React from "react";
import PropTypes from "prop-types";
import texts from "../../../configs/texts";
import ResultAgeContainer from "../../molecules/ResultAge/ResultAgeContainer";
import ResultGenderContainer from "../../molecules/ResultGender/ResultGenderContainer";

/**
 * Component to show list of result
 */
const ResultPanel = (props) => {

    // Initial content
    let content = <div className="lead text-center text-muted" style={{ margin: "40px auto" }}>{props.msg}</div>;
    // If no `msg`, display the 'result' components
    if (!props.msg) {
        content = (
            <div>
                <h2>{ResultPanel.createHeaderText(props.name)}</h2>
                <ResultAgeContainer />
                <ResultGenderContainer />
            </div>
        );
    }

    return (
        <div id="result-panel" className="jumbotron">
            {content}
        </div>
    )
}

// Create header
ResultPanel.createHeaderText = (name) => {
    return `${texts.RESULT_PANEL_HEADER_PRE_TEXT} for "${name}"`;
}
ResultPanel.propTypes = {
    // Message to show (mainly to be used when no result have been fetched). If falsy, will show list of result
    msg: PropTypes.string.isRequired,
    // The analyzed input name 
    name: PropTypes.string.isRequired,
}
export default ResultPanel;
