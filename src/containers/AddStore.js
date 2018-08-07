import {addingStore, error, success} from "../actions/actions";
import {connect} from "react-redux";
import StoreForm from "../components/StoreForm"

const mapStateToProps = (state) => ({
    loading: state.stores.loading,
    error: state.error,
    success: state.success,
});

const mapDispatchToProps = dispatch => ({
    addingStore: (store) => dispatch(addingStore(store)),
    errorChange: (state) => dispatch(error(state)),
    successChange: (state) => dispatch(success(state))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoreForm)