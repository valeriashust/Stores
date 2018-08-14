import React, {Component,} from 'react';
import {View, Modal, Text, StyleSheet,} from 'react-native';
import {Button,} from 'react-native-elements';
import PropTypes from 'prop-types';

const propTypes = {
    error: PropTypes.bool.isRequired,
    successChange: PropTypes.func.isRequired,
    errorChange: PropTypes.func.isRequired,
};
const styles = StyleSheet.create(
    {
        container: {
            padding: 30,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
        },

        textStyle: {
            fontSize: 18,
            color: 'black',
            textAlign: 'center',
        },

        buttonStyle: {
            borderRadius: 50,
            marginLeft: '35%',
            marginRight: 0,
            marginBottom: 0,
            marginTop: 15,
            width: 100,
        },
    },
);

class ModalForServerErrorMessage extends Component {
    updateStatus = () => {
        this.props.errorChange(false);
        this.props.successChange(false);
    };

    render() {
        return (
            <Modal
                animationType="fade"
                transparent={false}
                visible={this.props.error}
                onRequestClose={this.updateStatus}
            >
                <View style={styles.container}>
                    <Text style={styles.textStyle}>
                        Something went wrong. Please, check if your address exists.
                    </Text>
                    <Button
                        icon={{name: 'check'}}
                        onPress={this.updateStatus}
                        backgroundColor='#9900CC'
                        fontFamily='Lato'
                        buttonStyle={styles.buttonStyle}
                        title='HIDE'
                    />
                </View>
            </Modal>
        );
    };
}

ModalForServerErrorMessage.propTypes = propTypes;

export default ModalForServerErrorMessage;
