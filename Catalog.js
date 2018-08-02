'use strict';
import React, {Component} from 'react';
import {
    View, ScrollView, FlatList, Text, StyleSheet
} from 'react-native';
import {connect} from "react-redux";
import {Header, List, ListItem} from "react-native-elements";


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

    onPressItem = (id, name, time, address) => {
        this.props.navigation.navigate('Detail', {id: id, name: name, time: time, address: address});
    };

    onPressAdd = () => {
        this.props.navigation.navigate('AddStore');
    };

    onPressMap = () => {
        this.props.navigation.navigate('Map');
    };

    render() {

        const content = this.props.stores.length < 1 ?
            <Text style={styles.instructions}>Press 'Add' button to add a new store to the list!</Text> :
            <ScrollView style={{marginBottom: 10}}>
                <List>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                        data={this.props.stores}
                    />
                </List>
            </ScrollView>;

        return (
            <View>
                <Header
                    statusBarProps={{barStyle: 'light-content'}}
                    outerContainerStyles={{backgroundColor: '#9900CC', height: 55}}
                    leftComponent={{icon: 'map', color: '#fff', onPress: this.onPressMap}}
                    centerComponent={{text: 'CATALOG', style: {color: '#fff'}}}
                    rightComponent={{icon: 'add', color: '#fff', onPress: this.onPressAdd}}
                />
                {content}
            </View>


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

const mapStateToProps = (state) => ({
    stores: state.stores
});

export default connect(
    mapStateToProps
)(Catalog)