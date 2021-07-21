// Connect <InputForm />
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateNameInput, submitInputForm } from "./inputFormActions";
import InputForm from "./InputForm";

// Map global state to props
const mapStateToProps = (state) => {
    return {
        ...state.inputForm,
    };
}

// Map action creators to props
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onNameChange: updateNameInput,
        onSubmit: submitInputForm,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
