import React, {Component,} from 'react';
import {ListItem,} from 'react-native-elements';
import PropTypes  from 'prop-types';

const propTypes = {
    onPressItem: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
};
class Item extends Component {
    onPressForDetails = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        return (
            <ListItem
                key={this.props.id}
                title={this.props.name}
                leftIcon={{name: 'shopping-cart'}}
                onPressRightIcon={this.onPressForDetails}
                subtitle={this.props.address}
            />
        );
    };
}

Item.propTypes = propTypes;

export default Item;
