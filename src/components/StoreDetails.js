'use strict';
import React, {Component} from 'react';
import {
    StyleSheet, TextInput, Text,
} from 'react-native';
import {Card, Button} from "react-native-elements";


export default class StoreDetails extends Component {

    static navigationOptions = {title: 'Information'};

    constructor(props) {
        super(props);
        const {params} = this.props.navigation.state;
        this.state = {
            id: params.id,
            name: params.name,
            time: params.time,
            address: params.address,
        }
    }

    onSavePress = () => {
        this.props.editStore(this.state.id, {
            name: this.state.name,
            time: this.state.time,
            address: this.state.address
        });
        this.props.navigation.navigate('Home');
    };


    render() {

        return (
            <Card
                title={this.state.name}
                image={require('../../images/vhod-v-magazin-2.jpg')}>
                <Text>Name:</Text>

                <TextInput style={styles.text} value={this.state.name} onChangeText={(text) => {
                    this.setState({name: text})
                }}>
                </TextInput>

                <Text>Open at:</Text>

                <TextInput style={styles.text} value={this.state.time} onChangeText={(text) => {
                    this.setState({time: text})
                }}>
                </TextInput>

                <Text>Address:</Text>

                <Text style={{
                    fontSize: 18,
                    color: 'black', marginTop: 10
                }}>{this.state.address}</Text>
                <Button
                    icon={{name: 'save'}}
                    onPress={this.onSavePress}
                    backgroundColor='#9900CC'
                    fontFamily='Lato'
                    buttonStyle={{borderRadius: 50, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 20}}
                    title='SAVE CHANGES'/>
            </Card>

        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
    },
});


