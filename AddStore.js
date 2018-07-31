'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text, TextInput, Button,
} from 'react-native';
import {addStore} from "./actions";
import { connect } from 'react-redux'


class AddStore extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            time: '',
            address: '',
            id: 0,
        }
    }

    onApplyPress = () => {
        let newStore = {
            id: this.state.id,
            name: this.state.name,
            time: this.state.time,
            address: this.state.address,
        };
        this.props.addStore(newStore);
        this.setState({name: '',
            time: '',
            address: '',
            id: this.state.id+1});
        this.props.navigation.navigate('Home');

    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{marginBottom: 10}}>
                <Text style = {styles.text}>Name:</Text>
                <TextInput
                    value = {this.state.name}
                    style={styles.textInput}
                    onChangeText={(text) => {this.setState({name: text})}}
                    underlineColorAndroid={'transparent'}
                />
                </View>
                <View style={{marginBottom: 10}}>
                <Text style = {styles.text}>Open at:</Text>
                <TextInput
                    value = {this.state.time}
                    style={styles.textInput}
                    placeholder = 'hh:mm - hh:mm'
                    onChangeText={(text) => {this.setState({time: text})}}
                    underlineColorAndroid={'transparent'}
                />
                </View>
                <View style={{marginBottom: 10}}>
                    <Text style = {styles.text}>Address:</Text>
                    <TextInput
                        value = {this.state.address}
                        style={styles.textInput}
                        onChangeText={(text) => {this.setState({address: text})}}
                        underlineColorAndroid={'transparent'}
                    />
                </View>
                <View style={{marginBottom: 10}}>
                    <Button
                        onPress={this.onApplyPress}
                        color='#9900CC'
                        title='Apply'/>
                </View>
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

    textInput: {
        height: 40,
        width: '100%',
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        color: 'black',
    },

    text: {
       fontSize: 18,
    },
});

const mapStateToProps = (state) => ({
    stores: state
});

const mapDispatchToProps = dispatch => ({
    addStore: (store) => dispatch(addStore(store))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddStore)