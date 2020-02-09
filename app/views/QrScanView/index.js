import React, { Component } from 'react';
import styles from './styles'

import { withNavigationFocus } from '@react-navigation/compat'
import Spinner from 'react-native-spinkit';
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scanned: ''
		}
	}
	onSuccess = (e) => {
	}

	render() {
		const { isFocused } = this.props
		if (!isFocused) {
			return (
				<View style={styles.spinner}>
					<Spinner type="ThreeBounce" color="#aaa" size={70} />
				</View>
			)
		}
		return (
			<QRCodeScanner
				onRead={this.onSuccess}
			/>
		);
	}
}

export default withNavigationFocus(ScanScreen);