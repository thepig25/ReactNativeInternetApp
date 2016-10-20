import React, { Component } from 'react';
import { View, Image, Text} from 'react-native';

import styles from '../styles/home'
import {
  AlertIOS,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import TouchID from "../node_modules/react-native-touch-id";

class Home extends Component {

    render() {
    return (
      <View style={styles2.container}>
        <Text style={styles2.welcome}>
          react-native-touch-id
        </Text>

        <Text style={styles2.instructions}>
          github.com/naoufal/react-native-touch-id
        </Text>
        <TouchableHighlight
          style={styles2.btn}
          onPress={this._clickHandler}
          underlayColor="#0380BE"
          activeOpacity={1}
        >
          <Text style={{
            color: '#fff',
            fontWeight: '600'
          }}>
            Authenticate with Touch ID
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
    _clickHandler() {
        TouchID.authenticate('to demo this react-native component')
          .then(success => {
            AlertIOS.alert('Authenticated Successfully');
          })
          .catch(error => {
            AlertIOS.alert('Authentication Failed');
          });
      }
}
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    margin: 10,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  },
  instructions: {
    marginBottom: 5,
    color: '#333333',
    fontSize: 13,
    textAlign: 'center'
  },
  btn: {
    borderRadius: 3,
    marginTop: 200,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#0391D7'
  }
});

const errors = {
  "LAErrorAuthenticationFailed": "Authentication was not successful because the user failed to provide valid credentials.",
  "LAErrorUserCancel": "Authentication was canceled by the user—for example, the user tapped Cancel in the dialog.",
  "LAErrorUserFallback": "Authentication was canceled because the user tapped the fallback button (Enter Password).",
  "LAErrorSystemCancel": "Authentication was canceled by system—for example, if another application came to foreground while the authentication dialog was up.",
  "LAErrorPasscodeNotSet": "Authentication could not start because the passcode is not set on the device.",
  "LAErrorTouchIDNotAvailable": "Authentication could not start because Touch ID is not available on the device",
  "LAErrorTouchIDNotEnrolled": "Authentication could not start because Touch ID has no enrolled fingers.",
  "RCTTouchIDUnknownError": "Could not authenticate for an unknown reason.",
  "RCTTouchIDNotSupported": "Device does not support Touch ID."
};




module.exports = Home;
