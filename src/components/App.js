'use strict';
import React, {Component} from 'react'
import {createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {applyMiddleware, createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to AsyncStorage for react-native
import {YellowBox} from 'react-native';
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from '../reducers/reducers'
import thunk from 'redux-thunk';
import VisibleCatalog from "../containers/VisibleCatalog";
import ShowStoreDetails from "../containers/ShowStoreDetails";
import AddStore from "../containers/AddStore";
import ShowMap from "../containers/ShowMap";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);


let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
let persistor = persistStore(store);


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
        Home: VisibleCatalog,
        Detail: ShowStoreDetails,
        AddStore: AddStore,
        Map: ShowMap,
    },
    {
        headerMode: 'none',
    });


