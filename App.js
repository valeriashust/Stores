'use strict';
import AddStore from './AddStore';
import React, {Component} from 'react'

import {createStackNavigator} from 'react-navigation';
import Catalog from './Catalog';
import {Provider} from 'react-redux';
import StoreDetails from './StoreDetails';
import Map from './Map';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import reducer from './reducers';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let persistor = persistStore(store);




import {YellowBox} from 'react-native';



YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


export default class App extends Component<{}> {


    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Stack/>
                </PersistGate>
            </Provider>
        );
    }
}



const Stack = createStackNavigator({
        Home: Catalog,
        Detail: StoreDetails,
        AddStore: AddStore,
        Map: Map,
    },
    {
        headerMode: 'none',
    });


