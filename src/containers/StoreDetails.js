import {connect,} from 'react-redux';
import {editStore,} from '../actions/actions';
import StoreDetails from '../components/StoreDetails';

const mapStateToProps = state => (
    {
        stores: state.stores.items,
    }
);
const mapDispatchToProps = dispatch => (
    {
        editStore: (id, store) => dispatch(editStore(id, store)),
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoreDetails);
