import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from './views/HomeView';
import RoutesView from './views/RoutesView';
import QrScanView from './views/QrScanView'
import MapboxGL from '@react-native-mapbox-gl/maps';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { MID_BULE_COLOR } from './contants/color'
import store from './store';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
	componentDidMount() {
		MapboxGL.setAccessToken(
			'pk.eyJ1IjoibWFudXBhbmRheTE5OTgiLCJhIjoiY2syd3dtdDRoMGs2YzNxbzk3cWx5N2s2NyJ9.M210B6H1BoIn9rl2G5q1Xw',
		);
	}
	render() {
		return (
			<Provider store={store}>
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={({ route }) => ({
							tabBarIcon: ({ focused, color, size }) => {
								let iconName;

								if (route.name === 'Home') {
									iconName = focused
										? 'map-marker'
										: 'map-marker-outline';
								} else if (route.name === 'Routes') {
									iconName = 'format-line-weight'
								} else {
									iconName = 'qrcode-scan'
								}

								// You can return any component that you like here!
								return <Icon name={iconName} size={size} color={color} />;
							},
						})}
						tabBarOptions={{
							activeTintColor: MID_BULE_COLOR,
							inactiveTintColor: 'gray',
						}}
					>
						<Tab.Screen name="Home" component={HomeView} />
						<Tab.Screen name="Routes" component={RoutesView} />
						<Tab.Screen name="Scan" component={QrScanView} />
					</Tab.Navigator>
				</NavigationContainer>
			</Provider>
		);
	}
}
