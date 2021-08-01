import React from "react";
import InputFormContainer from "../organisms/InputForm/InputFormContainer";
import ResultPanelContainer from "../organisms/ResultPanel/ResultPanelContainer";

/**
 * Page to accept name & show result of name prediction.
 */
const NameAnalyzerPage = (props) => {

    return (
        <div className="row justify-content-center">
            <div className="col col-md-6">
                <header className="text-center">
                    <h1>Predict</h1>
                </header>
                <InputFormContainer />
                <ResultPanelContainer />
            </div >
        </div >
    )
}

export default NameAnalyzerPage;
