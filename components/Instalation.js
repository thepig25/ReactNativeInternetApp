import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/home'

class Instalation extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Track your instalation</Text>
            </View>
        );
    }
}

module.exports = Instalation;
