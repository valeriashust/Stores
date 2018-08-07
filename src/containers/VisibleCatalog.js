import {connect} from "react-redux";
import Catalog from '../components/Catalog'

const mapStateToProps = (state) => ({
    stores: state.stores.stores,
});


export default connect(
    mapStateToProps,
)(Catalog)