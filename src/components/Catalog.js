'use strict';
import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from "react-native-elements";
import ListOfItems from './ListOfItems'


export  default class Catalog extends Component {
    static navigationOptions = {title: 'Stores'};

    onPressAdd = () => {
        this.props.navigation.navigate('AddStore');
    };

    onPressMap = () => {
        this.props.navigation.navigate('Map');
    };

    navigateToDetail = (storeDetails) => {
        this.props.navigation.navigate('Detail', storeDetails);
    };

    render() {

        return (
            <View>
                <Header
                    statusBarProps={{barStyle: 'light-content'}}
                    outerContainerStyles={{backgroundColor: '#9900CC', height: 55}}
                    leftComponent={{icon: 'map', color: '#fff', onPress: this.onPressMap}}
                    centerComponent={{text: 'CATALOG', style: {color: '#fff'}}}
                    rightComponent={{icon: 'add', color: '#fff', onPress: this.onPressAdd}}
                />
                <ListOfItems navigate={this.navigateToDetail} stores={this.props.stores}/>
            </View>

        );
    }
}

