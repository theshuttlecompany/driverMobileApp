import React, { Component } from 'react';
import styles from './styles'

import {
	AppRegistry,
	StyleSheet,
	Text,
	TouchableOpacity,
	Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanScreen extends Component {
	onSuccess = (e) => {
	}

	render() {
		return (
			<QRCodeScanner
				onRead={this.onSuccess}
				flashMode={QRCodeScanner.Constants.FlashMode.torch}
				topContent={
					<Text style={styles.centerText}>
						Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
				}
				bottomContent={
					<TouchableOpacity style={styles.buttonTouchable}>
						<Text style={styles.buttonText}>OK. Got it!</Text>
					</TouchableOpacity>
				}
			/>
		);
	}
}