import React, { Component } from 'react';
import { View, Text, MapView, TouchableHighlight, TextInput, NetInfo} from 'react-native';

import styles from '../styles/home'

class Connectivity extends Component {

	constructor(props){
		super(props);
		this.state = {
			isConnected: 'Sydney',
		}
	}

	componentDidMount(){
		 NetInfo.isConnected.fetch().done(
        	(isConnected) => { this.setState({isConnected}); }
    	);
	}

	onSearchTextChanged(event){
		this.setState({ isConnected: event.nativeEvent.text });
	}

	render(){
		return (
			<View style={styles.container}>
				<Text>Check your current connection status so we can help you</Text>
				<Text style={{padding: 10, fontSize: 42}}>
					Your are currently {this.state.isConnected ? 'Online' : 'Offline'}
				</Text>
			</View>

		);
	}
}

module.exports = Connectivity;
