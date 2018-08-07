'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import MapView from "react-native-maps";


export default class Map extends Component {
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
}

const styles = StyleSheet.create({

    container: {
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },

});




