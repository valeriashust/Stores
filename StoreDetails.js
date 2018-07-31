'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Button, TextInput,
} from 'react-native';
import {connect} from "react-redux";
import {editStore} from "./actions";
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

class StoreDetails extends Component {

    static navigationOptions = {title: 'Information'};

    constructor(props) {
        super(props);
        const {params} = this.props.navigation.state;
        this.state = {
            name: params.name,
            time: params.time,
            address: params.address,
        }
    }

    onSavePress = () => {
        this.props.editStore(this.props.navigation.state.id, this.state.name, this.state.time, this.state.address);
        this.props.navigation.navigate('Home');
    };


    render() {

        return (
            <View style={styles.container}>

                <TextInput label={'Name:'} style={styles.text} value={this.state.name} onChangeText={(text) => {
                    this.setState({name: text})
                }}>
                </TextInput>
                <TextInput label={'Open at:'} style={styles.text} value={this.state.time} onChangeText={(text) => {
                    this.setState({time: text})
                }}>
                </TextInput>
                <TextInput label={'Address:'} style={styles.text} value={this.state.address} onChangeText={(text) => {
                    this.setState({address: text})
                }}>
                </TextInput>
                <Button
                    onPress={this.onSavePress}
                    color='#9900CC'
                    title='Save changes'/>
            </View>
        );
    }
};

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

const mapDispatchToProps = dispatch => ({
    editStore: (id, name, time, address) => dispatch(editStore(id, name, time, address))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoreDetails)

