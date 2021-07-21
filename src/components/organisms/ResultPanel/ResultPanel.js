import React from "react";
import PropTypes from "prop-types";

/**
 * Component to show list of result
 */
const ResultPanel = (props) => {

    // Initial content
    let content = <div className="text-center text-muted">{props.msg}</div>;

    return (
        <div id="result-panel">
            {content}
        </div>
    )
}
ResultPanel.propTypes = {
    // Message to show (mainly to be used when no result have been fetched). If falsy, will show list of result
    msg: PropTypes.string.isRequired,
}
export default ResultPanel;
