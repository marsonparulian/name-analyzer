import React from "react";
import InputFormContainer from "../organisms/InputForm/InputFormContainer";
import ResultPanelContainer from "../organisms/ResultPanel/ResultPanelContainer";

/**
 * Page to accept name & show result of name prediction.
 */
const NameAnalyzerPage = (props) => {

    return (
        <div>
            <InputFormContainer />
            <ResultPanelContainer />
        </div >
    )
}

export default NameAnalyzerPage;
