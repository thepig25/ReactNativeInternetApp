import React, { Component } from 'react';
import { View, Text, WebView, ActivityIndicator } from 'react-native';

import styles from '../styles/home'

class Plans extends Component {

	constructor(props) {
		super(props);
		this.state = {
			backButtonEnabled: false,
			forwardButtonEnabled: false,
			loading: true,
			scalesPageToFit: true,
		};
	}
    render(){
        return (
			<WebView
				source={{uri: 'https://www.vodafone.com.au/mobile-broadband/plans'}}
				style={{marginTop: 20}}
				startInLoadingState={true}
			/>
        );
    }
}

module.exports = Plans;
