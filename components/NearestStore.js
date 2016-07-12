import React, { Component } from 'react';
import { View, Text, MapView, TouchableHighlight, TextInput, NetInfo} from 'react-native';

import styles from '../styles/home'

class NearestStore extends Component {


	render(){
		return (
			<MapView
				style={{height: 600, margin: 20}}
				showsUserLocation={true}
				followUserLocation={false}
				showsCompass={true}
				overlays={[{
					coordinates:[
						{latitude: -33.8689632, longitude: 151.204549},
					],
					strokeColor: '#f007',
					lineWidth: 10,
				}]}

			  />

		);
	}
}

module.exports = NearestStore;
