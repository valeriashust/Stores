'use strict';
import AddStore from './AddStore';
import React, {Component} from 'react'
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Catalog from './Catalog';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import StoreDetails from './StoreDetails';
import Map from './Map';

export const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


export default class App extends Component<{}> {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Stack/>
            </Provider>
        );
    }
}

const AppShow = createBottomTabNavigator(
    {
        Home: Catalog,
        AddStore: AddStore,
        Map: Map,
    },
    {
        tabBarOptions: {
            activeTintColor: 'black',
            activeBackgroundColor: '#c57fec',
            labelStyle: {
                fontSize: 18,
                color: 'white',
            },
            style: {
                backgroundColor: '#a6a4ac',
                height: 35,
            },
        },
    }
);

const Stack = createStackNavigator({
    Home: AppShow,
    Detail: StoreDetails
},
{
    headerMode: 'none',
});


