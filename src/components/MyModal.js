
import React, {Component} from 'react';
import {
    View ,Modal, Text,
} from 'react-native';
import {Button} from 'react-native-elements';

export default class MyModal extends Component {
    render() {
        return (
            <Modal
                animationType="fade"
                transparent={false}
                visible={this.props.error}
                onRequestClose={() => {
                    this.props.errorChange(false);
                    this.props.successChange(false);
                    this.setState({errorFill: false})
                }}>

                <View style={{
                    padding: 30,
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <View>
                        <Text style={{
                            fontSize: 18,
                            color: 'black', textAlign: 'center'
                        }}>Something went wrong. Please, check if your address exists.</Text>

                        <Button
                            icon={{name: 'check'}}
                            onPress={() => {
                                this.props.errorChange(false);
                                this.props.successChange(false);
                                this.setState({errorFill: false})
                            }}
                            backgroundColor='#9900CC'
                            fontFamily='Lato'
                            buttonStyle={{
                                borderRadius: 50,
                                marginLeft: '35%',
                                marginRight: 0,
                                marginBottom: 0,
                                marginTop: 15,
                                width: 100
                            }}
                            title='HIDE'/>

                    </View>
                </View>
            </Modal>
        );
    }
}