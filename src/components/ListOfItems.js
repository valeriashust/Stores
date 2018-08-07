import React, {Component} from 'react';
import {
    ScrollView, FlatList, Text, StyleSheet
} from 'react-native';
import {List} from "react-native-elements";
import MyListItem from "./MyListItem";

export default class ListOfItems extends Component {

    onPressItem = (id, name, time, address) => {
        this.props.navigate({id: id, name: name, time: time, address: address});
    };

    renderItem = ({item}) => {
        return (
            <MyListItem
                id={item.id}
                onPressItem={this.onPressItem}
                name={item.name}
                time={item.time}
                address={item.address}
            />
        )
    };

    keyExtractor = (item) => String(item.id);

    render() {

        return (
            this.props.stores.length < 1 ?
                <Text style={styles.instructions}>Press 'Add' button to add a new store to the list!</Text> :
                <ScrollView style={{marginBottom: 10}}>
                    <List>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderItem}
                            data={this.props.stores}
                        />
                    </List>
                </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    instructions: {
        marginTop: '50%',
        textAlign: 'center',
        color: '#333333',
    },
});