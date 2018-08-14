import React, {Component,} from 'react';
import {ActivityIndicator, StyleSheet, View,} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage, Button,} from 'react-native-elements';
import PropTypes from 'prop-types';

const propTypes = {
    loading: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    successChange: PropTypes.func.isRequired,
    errorChange: PropTypes.func.isRequired,
    asyncAddStore: PropTypes.func.isRequired,
};
const styles = StyleSheet.create(
    {
        textInput: {
            fontSize: 18,
            color: 'black',
        },

        labelStyle: {
            color: 'green',
        },

        buttonStyle: {
            borderRadius: 50,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            marginTop: 15,
        },
    },
);
const errorValidationMessage = <FormValidationMessage>{'All fields are required!'}</FormValidationMessage>;
const successMessage =
    <FormValidationMessage labelStyle={styles.labelStyle}>{'Successfully added!'}</FormValidationMessage>;
const spinner = <ActivityIndicator size="small" color="#9900CC"/>;

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            time: '',
            address: '',
            errorOfValidation: false,
        };
        this.props.successChange(false);
        this.props.errorChange(false);
    };

    onApplyButtonPress = () => {
        this.props.successChange(false);
        if (this.hasEmptyFields()) return;

        let newStore = {
            name: this.state.name,
            time: this.state.time,
            address: this.state.address,
        };

        this.props.asyncAddStore(newStore);
        this.setState({errorOfValidation: false});
    };

    hasEmptyFields = () => {
        if (this.state.name === ''
            || this.state.time === ''
            || this.state.address === '')
        {
            this.setState({errorOfValidation: true});
            return true;
        }
        return false;
    };

    render() {
        const showErrorValidationMessage = this.state.errorOfValidation ? errorValidationMessage : null;
        const showSuccessMessage = this.props.success ? successMessage : null;
        const showSpinner = this.props.loading ? spinner : null;

        return (
            <View>
                {showSpinner}
                <FormLabel>NAME</FormLabel>
                <FormInput
                    value={this.state.name}
                    inputStyle={styles.textInput}
                    underlineColorAndroid={'grey'}
                    onChangeText={(text) => {this.setState({name: text})}}
                />
                <FormLabel>OPEN AT</FormLabel>
                <FormInput
                    value={this.state.time}
                    inputStyle={styles.textInput}
                    underlineColorAndroid={'grey'}
                    onChangeText={(text) => {this.setState({time: text})}}
                />
                <FormLabel>ADDRESS</FormLabel>
                <FormInput
                    value={this.state.address}
                    inputStyle={styles.textInput}
                    underlineColorAndroid={'grey'}
                    onChangeText={(text) => {this.setState({address: text})}}
                />
                {showErrorValidationMessage}
                {showSuccessMessage}
                <Button
                    icon={{name: 'check'}}
                    onPress={this.onApplyButtonPress}
                    backgroundColor='#9900CC'
                    fontFamily='Lato'
                    buttonStyle={styles.buttonStyle}
                    title='APPLY'
                />
            </View>
        );
    };
}

Form.propTypes = propTypes;

export default Form;
