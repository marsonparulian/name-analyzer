import React from "react";
import PropTypes from "prop-types";
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
ResultPanel.propTypes = {
    // Message to show (mainly to be used when no result have been fetched). If falsy, will show list of result
    msg: PropTypes.string.isRequired,
}
export default ResultPanel;
