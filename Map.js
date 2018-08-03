'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import {addingStore} from "./actions";
import {connect} from "react-redux";




class Map extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        return (

            <View style={styles.container}>
                <MapView style={styles.map}>

                    {this.props.stores.map(store => (
                        <MapView.Marker
                            key={store.id}
                            coordinate={{latitude: store.position.lat,
                                longitude: store.position.lng}}
                            title={store.name}
                            description={store.time}
                        />
                    ))}
                </MapView>
            </View>

        );
    }
};

const styles = StyleSheet.create({

        container: {
            ...StyleSheet.absoluteFillObject,
        },
        map: {
            ...StyleSheet.absoluteFillObject,
        },

});

const mapStateToProps = (state) => ({
    stores: state.stores
});



export default connect(
    mapStateToProps
)(Map)
