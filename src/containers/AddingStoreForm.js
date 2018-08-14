import {setError, setSuccess,} from '../actions/actions';
import {asyncAddStore,} from '../actions/asyncActions';
import {connect,} from 'react-redux';
import AddingStoreForm from '../components/AddingStoreForm';

const mapStateToProps = state => (
    {
        loading: state.stores.loading,
        error: state.error,
        success: state.success,
    }
);
const mapDispatchToProps = dispatch => (
    {
        asyncAddStore: store => dispatch(asyncAddStore(store)),
        setError: state => dispatch(setError(state)),
        setSuccess: state => dispatch(setSuccess(state)),
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddingStoreForm);