import React, {Component} from "react";
import {ListItem} from "react-native-elements";

export default class MyListItem extends Component {

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