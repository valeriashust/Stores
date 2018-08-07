import {connect} from "react-redux";
import Map from '../components/Map'

const mapStateToProps = (state) => ({
    stores: state.stores.stores
});


export default connect(
    mapStateToProps
)(Map)