'use strict';
import React, {Component} from 'react';
import {
    View, ScrollView, FlatList,
} from 'react-native';
import {connect} from "react-redux";
import {List, ListItem, Text} from "react-native-elements";

class MyListItem extends Component {

    onPress = () => {
        this.props.onPressItem(this.props.id, this.props.name, this.props.time, this.props.address);
    };

    render() {
        return (
            <ListItem
                key={this.props.id}
                title={this.props.name}
                leftIcon={{name: 'shopping-cart'}}
                onPressRightIcon={this.onPress}
                subtitle={this.props.address}
            />
        );
    }
}


class Catalog extends Component<{}> {
    static navigationOptions = {title: 'Stores'};

    constructor(props) {
        super(props);
    };

    renderItem =  ({item}) => {
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

    onPressItem = (id, name, time, address) => {
        this.props.navigation.navigate('Detail', {id: id, name: name, time: time, address: address});
    };


    render() {
        return (
            <View >
                <ScrollView style={{marginBottom: 10}}>
                    <Text style={{textAlign: 'center', marginTop: 15}} h2>Catalog</Text>
                    <List>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderItem}
                            data={this.props.stores}
                        />
                    </List>

                </ScrollView>

            </View>


        );
    }
}


const mapStateToProps = (state) => ({
    stores: state
});

export default connect(
    mapStateToProps
)(Catalog)