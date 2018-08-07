'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Content from './Content'
import MyModal from "./MyModal";

export default class StoreForm extends Component {

    render() {

        return (
            <View style={styles.container}>

                <MyModal errorChange={this.props.errorChange} successChange={this.props.successChange}
                         error={this.props.error}/>
                <Content errorChange={this.props.errorChange} successChange={this.props.successChange}
                         addingStore={this.props.addingStore} success={this.props.success} loading={this.props.loading}/>

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

});
