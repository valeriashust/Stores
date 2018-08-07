import React, {Component,} from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import {Header,} from 'react-native-elements';
import ListOfItems from './ListOfItems';
import PropTypes  from 'prop-types';

const propTypes = {
    navigation: PropTypes.object.isRequired,
    stores: PropTypes.array.isRequired,
};
const styles = StyleSheet.create(
    {
        instructions: {
            marginTop: '50%',
            textAlign: 'center',
            color: '#333333',
        },

        outerContainerStyles: {
            backgroundColor: '#9900CC',
            height: 55,
        },
        componentsStyle: {
            color: '#fff',
        },
    },
);

class StoresList extends Component {
    onAddButtonPress = () => {
        this.props.navigation.navigate('AddStore');
    };

    onMapButtonPress = () => {
        this.props.navigation.navigate('Map');
    };

    navigateToDetails = (currentStoreId) => {
        this.props.navigation.navigate('Details', {id: currentStoreId});
    };

    hasNoItems = () => {
        return (this.props.stores.length < 1);
    };

    render() {
        const notification = <Text style={styles.instructions}>Press 'Add' button to add a new store to the list!</Text>;
        const listOfItems = <ListOfItems navigateToDetails={this.navigateToDetails} stores={this.props.stores} />;
        const content = this.hasNoItems() ? notification : listOfItems;

        return (
            <View>
                <Header
                    statusBarProps={{barStyle: 'light-content'}}
                    outerContainerStyles={styles.outerContainerStyles}
                    leftComponent={{icon: 'map', color: '#fff', onPress: this.onMapButtonPress}}
                    centerComponent={{text: 'CATALOG', style: styles.componentsStyle}}
                    rightComponent={{icon: 'add', color: '#fff', onPress: this.onAddButtonPress}}
                />
                {content}
            </View>

        );
    };
}

StoresList.propTypes = propTypes;

export  default StoresList;
