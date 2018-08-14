import React, {Component,} from 'react';
import {TextInput, Text, StyleSheet,} from 'react-native';
import {Card, Button,} from 'react-native-elements';
import PropTypes from 'prop-types';

const propTypes = {
    navigation: PropTypes.object.isRequired,
    stores: PropTypes.array.isRequired,
    editStore: PropTypes.func.isRequired,
};
const styles = StyleSheet.create(
    {
        textInput: {
            fontSize: 18,
            color: 'black',
        },

        buttonStyle: {
            borderRadius: 50,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            marginTop: 20,
        },
    },
);

class StoreDetails extends Component {

    constructor(props) {
        super(props);

        const {params} = this.props.navigation.state;

        this.currentStoreId = params.id;
        this.currentStoreInfo = this.props.stores.find(store => store.id === this.currentStoreId);
        this.state = {
            name: this.currentStoreInfo.name,
            time: this.currentStoreInfo.time,
        };
    };

    onSaveButtonPress = () => {
        let newStoreInfo = {
            name: this.state.name,
            time: this.state.time,
        };
        this.props.editStore(
            this.currentStoreId,
            newStoreInfo
        );
        this.props.navigation.navigate('Home');
    };

    render() {
        return (
            <Card
                title={this.state.name}
                image={require('../../images/vhod-v-magazin-2.jpg')}
            >
                <Text>Name:</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.name}
                    onChangeText={(text) => {this.setState({name: text})}}
                >
                </TextInput>
                <Text>Open at:</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.time}
                    onChangeText={(text) => {this.setState({time: text})}}
                >
                </TextInput>
                <Text>Address:</Text>
                <Text style={styles.textInput}>{this.currentStoreInfo.address}</Text>
                <Button
                    icon={{name: 'save'}}
                    onPress={this.onSaveButtonPress}
                    backgroundColor='#9900CC'
                    fontFamily='Lato'
                    buttonStyle={styles.buttonStyle}
                    title='SAVE CHANGES'
                />
            </Card>
        );
    };
}

StoreDetails.propTypes = propTypes;

export default StoreDetails;
