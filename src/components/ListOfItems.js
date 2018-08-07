import React, {Component,} from 'react';
import {ScrollView, FlatList, StyleSheet,} from 'react-native';
import {List,} from 'react-native-elements';
import Item from './Item';
import PropTypes  from 'prop-types';

const propTypes = {
    navigateToDetails: PropTypes.func.isRequired,
    stores: PropTypes.array.isRequired,
};
const styles = StyleSheet.create(
    {
        scrollViewStyle: {
            marginBottom: 10,
        },
    },
);

class ListOfItems extends Component {

    onPressItem = (currentStoreId) => {
        this.props.navigateToDetails(currentStoreId);
    };

    renderItem = ({item}) => {
        return (
            <Item
                id={item.id}
                onPressItem={this.onPressItem}
                name={item.name}
                address={item.address}
            />
        );
    };

    keyExtractor = (item) => String(item.id);

    render() {
        return (
            <ScrollView style={styles.scrollViewStyle}>
                <List>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                        data={this.props.stores}
                    />
                </List>
            </ScrollView>
        );
    };
}

ListOfItems.propTypes = propTypes;

export default ListOfItems;
