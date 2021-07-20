// Connect <InputForm />
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
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
        onNameChange: () => false,
        onSubmit: () => false,
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
