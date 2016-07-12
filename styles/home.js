import {
	StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#FFF',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		top: 70,
	},
	container2: {
		alignItems: 'center',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		top: 70,
		backgroundColor: 'red',
	},
	image: {
		width: 217,
		height: 138,
	},
	flowRight: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center',
	},
	button: {
		height: 36,
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center',
	},
	searchInput: {
		height: 36,
		padding: 4,
		marginRight: 5,
		flex: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#48BBEC',
		borderRadius: 8,
		color: '#48BBEC',
	},
	description: {
		marginBottom: 20,
		fontSize: 18,
		textAlign: 'center',
		color: '#656565'
	},
	container: {
		padding: 30,
		marginTop: 65,
		alignItems: 'center'
	}
});