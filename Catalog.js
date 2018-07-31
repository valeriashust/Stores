'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Button, ScrollView, Text, FlatList, TouchableOpacity,
} from 'react-native';
import {connect} from "react-redux";

class MyListItem extends Component {

    onPress = () => {
        this.props.onPressItem(this.props.id, this.props.name, this.props.time, this.props.address, );
    };

    render() {
        return (
            <TouchableOpacity onPress={this.onPress}>
                <View>
                    <Text style={styles.text}>
                        {this.props.name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}


class Catalog extends Component<{}> {
    static navigationOptions = {title: 'Stores'};

    constructor(props) {
        super(props);
    };

    onPressItem = (id, name, time, address) => {
        this.props.navigation.navigate('Detail', {
            id: id,
            name: name,
            time: time,
            address: address
        });
    };

    keyExtractor = (item, index) => String(item.id);

    renderItem = ({item}) => (
        <MyListItem
            id={item.id}
            onPressItem={this.onPressItem}
            name={item.name}
            time={item.time}
            address={item.address}
        />
    );

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{marginBottom: 10}}>
                    <FlatList
                        data={this.props.stores}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                    />
                </ScrollView>

            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    text: {
        fontSize: 18,
    },
});

const mapStateToProps = (state) => ({
    stores: state
});

export default connect(
    mapStateToProps
)(Catalog)