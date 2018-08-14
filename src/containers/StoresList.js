import {connect,} from 'react-redux';
import StoresList from '../components/StoresList';

const mapStateToProps = state => (
    {
        stores: state.stores.items,
    }
);

export default connect(
    mapStateToProps,
)(StoresList);
