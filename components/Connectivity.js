import React, { Component } from 'react';
import { View, Text, MapView, TouchableHighlight, TextInput, NetInfo} from 'react-native';

import styles from '../styles/home'

class Connectivity extends Component {

	constructor(props){
		super(props);
		this.state = {
			isConnected: null,
			connectionInfo: null,
		}
	}


	componentDidMount () {
		NetInfo.isConnected.addEventListener(
			'change',
			this._handleConnectivityChange
		);
		NetInfo.isConnected.fetch().done(
			(isConnected) => { this.setState({isConnected}); }
		);
	}
	componentWillUnmount () {
		NetInfo.isConnected.removeEventListener(
			'change',
			this._handleConnectivityChange
		);
	}

	_handleConnectivityChange = (isConnected) => {
		this.setState({
			isConnected,
		});
	}

	componentDidMount () {
		NetInfo.addEventListener(
			'change',
			this._handleConnectionInfoChange
		);
		NetInfo.fetch().done(
			(connectionInfo) => { this.setState({connectionInfo}); }
		);
	}

	ComponentWillUnmount () {
		NetInfo.removeEventListener(
			'change',
			this._handleConnectionInfoChange
		);
	}

  _handleConnectionInfoChange = (connectionInfo) => {
	 this.setState({
	  connectionInfo,
	});
  }
	render(){
		return (
			<View style={styles.container2}>
				<Text style={{padding: 10, fontSize: 22, color: 'white'}}>Check your current connection status so we can help you</Text>
				<Text style={{padding: 10, fontSize: 22, color: 'white'}}>
					Your are currently  {this.state.isConnected ? 'Online' : 'Offline'}
				</Text>
				<Text style={{padding: 10, fontSize: 22, color: 'white'}}>
					and connected via {this.state.connectionInfo}
				</Text>
			</View>

		);
	}
}

module.exports = Connectivity;
