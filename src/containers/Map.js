import {connect,} from 'react-redux';
import Map from '../components/Map';

const mapStateToProps = state => (
    {
        stores: state.stores.items,
    }
);

export default connect(
    mapStateToProps,
)(Map);