'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {addStore} from "./actions";
import {connect} from 'react-redux';
import {FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements';


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
        this.setState({
            name: '',
            time: '',
            address: '',
            id: this.state.id + 1
        });
        this.props.navigation.navigate('Home');

    };

    render() {
        return (
            <View style={styles.container}>

                <FormLabel>NAME</FormLabel>
                <FormInput inputStyle={styles.textInput} underlineColorAndroid={'grey'} onChangeText={(text) => {
                    this.setState({name: text})
                }}/>

                <FormLabel>OPEN AT</FormLabel>
                <FormInput inputStyle={styles.textInput} underlineColorAndroid={'grey'} onChangeText={(text) => {
                    this.setState({time: text})
                }}/>

                <FormLabel>ADDRESS</FormLabel>
                <FormInput inputStyle={styles.textInput} underlineColorAndroid={'grey'} onChangeText={(text) => {
                    this.setState({address: text})
                }}/>

                <Button
                    icon={{name: 'check'}}
                    onPress={this.onApplyPress}
                    backgroundColor='#9900CC'
                    fontFamily='Lato'
                    buttonStyle={{borderRadius: 50, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 15}}
                    title='APPLY'/>


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
    stores: state
});

const mapDispatchToProps = dispatch => ({
    addStore: (store) => dispatch(addStore(store))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddStore)