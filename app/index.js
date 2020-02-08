import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from './views/HomeView';
import RoutesView from './views/RoutesView';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { Provider } from 'react-redux';

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
					<Tab.Navigator>
						<Tab.Screen name="Home" component={HomeView} />
						<Tab.Screen name="Notifications" component={RoutesView} />
					</Tab.Navigator>
				</NavigationContainer>
			</Provider>
		);
	}
}
