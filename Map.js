'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import MapView, {Marker} from "react-native-maps";



export default class Map extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        return (

            <View style={styles.container}>
                <MapView style={styles.map}
                         region={{
                             latitude: 53.944345,
                             longitude: 27.696361,
                             latitudeDelta: 0.1,
                             longitudeDelta: 0.1,
                         }}>

                    <Marker
                             coordinate={{
                                 latitude: 53.944345,
                                 longitude: 27.696361,
                             }}
                                    title={'Tittle'}
                                    description={'description'}

                    />
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
