import React, {Component} from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements';


export default class StoreForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            time: '',
            address: '',
            errorFill: false,
        };
        this.props.successChange(false);
        this.props.errorChange(false);
    }

    onApplyPress = () => {
        if (this.state.name === '' || this.state.time === '' || this.state.address === '') {
            this.setState({errorFill: true});
            return;
        }

        let newStore = {
            name: this.state.name,
            time: this.state.time,
            address: this.state.address,
        };

        this.props.addingStore(newStore);
        this.setState({errorFill: false});

    };


    render() {
        const errorMessage = this.state.errorFill ?
            <FormValidationMessage>{'All fields are required!'}</FormValidationMessage> :
            null;

        const successMessage = this.props.success ?
            <FormValidationMessage labelStyle={{color: 'green'}}>{'Successfully added!'}</FormValidationMessage> :
            null;

        return (
            this.props.loading ?
                <ActivityIndicator size="small" color="#9900CC"/> :
                <View>


                    <FormLabel>NAME</FormLabel>
                    <FormInput value={this.state.name} inputStyle={styles.textInput} underlineColorAndroid={'grey'}
                               onChangeText={(text) => {
                                   this.setState({name: text})
                               }}/>

                    <FormLabel>OPEN AT</FormLabel>
                    <FormInput value={this.state.time} inputStyle={styles.textInput} underlineColorAndroid={'grey'}
                               onChangeText={(text) => {
                                   this.setState({time: text})
                               }}/>

                    <FormLabel>ADDRESS</FormLabel>
                    <FormInput value={this.state.address} inputStyle={styles.textInput} underlineColorAndroid={'grey'}
                               onChangeText={(text) => {
                                   this.setState({address: text})
                               }}/>
                    {errorMessage}
                    {successMessage}

                    <Button
                        icon={{name: 'check'}}
                        onPress={this.onApplyPress}
                        backgroundColor='#9900CC'
                        fontFamily='Lato'
                        buttonStyle={{borderRadius: 50, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 15}}
                        title='APPLY'/>
                </View>
        )
    }
}
const styles = StyleSheet.create({

    textInput: {
        fontSize: 18,
        color: 'black',
    },

});