import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	spinner: {
		justifyContent: 'center',
		alignItems: 'center', // Centered horizontally
		flex: 1,
		margin: 10,
	},
	itemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
	},
	icon: {
		marginRight: 20,
	},
	routeName: {
		fontSize: 15
	},
	agencyName: {
		color: 'grey',
		fontSize: 12
	}
})

export default styles;