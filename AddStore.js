'use strict';
import React, {Component} from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';
import {addingStore} from "./actions";
import {connect} from 'react-redux';
import {FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements';


class AddStore extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            time: '',
            address: '',
            error: false,
        }
    }

    onApplyPress = () => {
        if (this.state.name === '' || this.state.time === '' || this.state.address === '') {
            this.setState({error: true});
            return;
        }

        let newStore = {
            name: this.state.name,
            time: this.state.time,
            address: this.state.address,
        };
        this.props.addingStore(newStore);
        this.setState({
            name: '',
            time: '',
            address: '',
        });
        this.props.navigation.navigate('Home');

    };

    render() {
        const errorMessage = this.state.error ?
            <FormValidationMessage>{'All fields are required!'}</FormValidationMessage> :
            null;
        const content = this.props.loading ?
            <ActivityIndicator size="small" color="#9900CC" /> :
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

                <Button
                    icon={{name: 'check'}}
                    onPress={this.onApplyPress}
                    backgroundColor='#9900CC'
                    fontFamily='Lato'
                    buttonStyle={{borderRadius: 50, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 15}}
                    title='APPLY'/>
            </View>;
        return (

            <View style={styles.container}>

                {content}

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
        fontSize: 18,
        color: 'black',
    },

});

const mapStateToProps = (state) => ({
    stores: state.stores,
    loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
    addingStore: (store) => dispatch(addingStore(store))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddStore)