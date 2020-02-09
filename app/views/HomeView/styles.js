import { StyleSheet } from 'react-native';
import { RED } from '../../contants/color';

export default styles = StyleSheet.create({
	map: {
		flex: 1
	}
})

export const BUS = {
	lineColor: RED,
	lineCap: 'round',
	lineWidth: [
		'interpolate',
		['linear'],
		['zoom'],
		10,
		0.5,
		11,
		1,
		12,
		2,
		13,
		5,
		16,
		10,
	],
}