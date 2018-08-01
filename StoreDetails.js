'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View, TextInput, Text,
} from 'react-native';
import {connect} from "react-redux";
import {editStore} from "./actions";
import {Card, Button} from "react-native-elements";


class StoreDetails extends Component {

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
        this.props.editStore(this.state.id, {name:this.state.name, time:this.state.time, address:this.state.address});
        this.props.navigation.navigate('Home');
    };


    render() {

        return (

                <Card
                    title={this.state.name}
                    image={require('./images/vhod-v-magazin-2.jpg')}>
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

                    <TextInput style={styles.text} value={this.state.address} onChangeText={(text) => {
                        this.setState({address: text})
                    }}>
                    </TextInput>
                    <Button
                        icon={{name: 'save'}}
                        onPress={this.onSavePress}
                        backgroundColor='#9900CC'
                        fontFamily='Lato'
                        buttonStyle={{borderRadius: 50, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='SAVE' />
                </Card>

        );
    }
};

const styles = StyleSheet.create({

    text: {
        fontSize: 18,
    },
});


const mapStateToProps = (state) => ({
    stores: state
});

const mapDispatchToProps = dispatch => ({
    editStore: (id, store) => dispatch(editStore(id, store))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoreDetails)

