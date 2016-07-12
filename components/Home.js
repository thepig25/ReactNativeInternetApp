import React, { Component } from 'react';
import { View, Image, Text} from 'react-native';

import styles from '../styles/home'

class Home extends Component {

    render(){
    	let pic = {
	      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Internet1.jpg/954px-Internet1.jpg'
	    };
        return (
            <View style={styles.container}>
                <Text>Welcome to the Internet</Text>
                 <Image source={pic} style={{width: 193, height: 110}}/>
            </View>
        );
    }
}

module.exports = Home;
