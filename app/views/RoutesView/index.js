import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Spinner from 'react-native-spinkit';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import fetchAllData from '../../api/fetchAllRoutes';
import { setRoute } from '../../actions/route';
import { MID_BULE_COLOR } from '../../contants/color'

class RoutesView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFetching: true,
			data: [],
		};
	}
	componentDidMount() {
		this.setState({
			isFetching: true,
		});
		this.fetchData();
	}

	fetchData = async () => {
		try {
			const data = await fetchAllData();
			if (data) {
				this.setState({
					data: data,
					isFetching: false,
				});
			}
		} catch (e) { }
	};
	renderSpinner = () => {
		return (
			<View style={styles.spinner}>
				<Spinner type="ThreeBounce" color="#aaa" size={70} />
			</View>
		);
	};

	itemPress = (route) => {
		this.props.setRoute(route);
	}

	renderItem = (route) => {
		return (
			<TouchableOpacity key={route.id} style={styles.itemContainer} onPress={() => this.itemPress(route)}>
				<Icon name="route" size={30} color={MID_BULE_COLOR} style={styles.icon} />
				<View>
					<Text style={styles.routeName}>{route.longName}</Text>
					<Text style={styles.agencyName}>{route.agencyName}</Text>
				</View>
			</TouchableOpacity>)
	}

	render() {
		const { isFetching, data } = this.state;
		if (isFetching) {
			return this.renderSpinner();
		}
		return (
			<ScrollView>
				{data.map(route => {
					return this.renderItem(route);
				})}
			</ScrollView>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setRoute: route => dispatch(setRoute(route)),
});

export default connect(
	null,
	mapDispatchToProps,
)(RoutesView);
