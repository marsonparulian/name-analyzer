// Connect <InputForm />
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateNameInput } from "./inputFormActions";
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
        onSubmit: () => false,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
