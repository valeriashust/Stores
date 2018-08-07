import React, {Component,} from 'react';
import {YellowBox,} from 'react-native';
import {createStackNavigator,} from 'react-navigation';
import {applyMiddleware, createStore,} from 'redux';
import {Provider,} from 'react-redux';
import {composeWithDevTools,} from 'redux-devtools-extension';
import {PersistGate,} from 'redux-persist/integration/react';
import {persistStore, persistReducer,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import StoresList from '../containers/StoresList';
import StoreDetails from '../containers/StoreDetails';
import AddingStoreForm from '../containers/AddingStoreForm';
import Map from '../containers/Map';

const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const Stack = createStackNavigator(
    {
        Home: StoresList,
        Details: StoreDetails,
        AddStore: AddingStoreForm,
        Map: Map,
    },
    {
        headerMode: 'none',
    },
);

let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
let persistor = persistStore(store);

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Stack />
                </PersistGate>
            </Provider>
        );
    };
};
