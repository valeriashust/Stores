import React, {Component,} from 'react';
import {StyleSheet, View,} from 'react-native';
import Form from './Form';
import ModalForServerErrorMessage from './ModalForServerErrorMessage';
import PropTypes from 'prop-types';

const propTypes = {
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    setSuccess: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
    asyncAddStore: PropTypes.func.isRequired,
};
const styles = StyleSheet.create(
    {
        container: {
            padding: 30,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
        },
    },
);

class AddingStoreForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ModalForServerErrorMessage
                    errorChange={this.props.setError}
                    successChange={this.props.setSuccess}
                    error={this.props.error}
                />
                <Form
                    errorChange={this.props.setError}
                    successChange={this.props.setSuccess}
                    asyncAddStore={this.props.asyncAddStore}
                    success={this.props.success}
                    loading={this.props.loading}
                />
            </View>
        );
    };
}

AddingStoreForm.propTypes = propTypes;

export default AddingStoreForm;
