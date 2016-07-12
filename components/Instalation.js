import React, { Component } from 'react';
import { View, Text, MapView, TouchableHighlight, TextInput } from 'react-native';

import styles from '../styles/home'

class Instalation extends Component {

	constructor(props){
		super(props);
		this.state = {
			searchString: 'Sydney',
		}
	}

	onSearchPressed(){
		let query = this.state.searchString;
		this._executeQuery(query);
	}

	onLocationPressed(){
		navigator.geolocation.getCurrentPosition(
			location => {
			let search = location.coords.latitude + ',' + location.coords.longitude;
			this.setState({ searchString: search });
		},
		error => {
			this.setState({
				message: 'There was a problem with obtaining your location: ' +  error
			});
		}
		)
	}

	onSearchTextChanged(event){
		this.setState({ searchString: event.nativeEvent.text });
	}

    render(){
        return (
            <View style={styles.container}>
                <Text>Track your instalation</Text>
				<TextInput
					style={styles.searchInput}
					value={this.state.searchString}
					onChange={this.onSearchTextChanged.bind(this)}
					placeholder='Search via name or postcode'/>
				<TouchableHighlight style={styles.button}
					underlayColor='#99d9f4'
					onPress={this.onLocationPressed.bind(this)}>
					<Text style={styles.buttonText}>Use Current Location</Text>
				</TouchableHighlight>
				<Text style={{padding: 10, fontSize: 42}}>
					Your Current Location is {this.state.searchString}
				</Text>
            </View>

        );
    }
}

module.exports = Instalation;
