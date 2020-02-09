import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import BgTracking from '../BgTraking';
import { connect } from 'react-redux';
import polyline from '@mapbox/polyline'


import styles, { BUS } from './styles';
import startIcon from '../../static/start.png'
import { RED } from '../../contants/color';

const MAX_ZOOM = 17;
const MIN_ZOOM = 10;

const MAP_BOUNDS = {
	ne: [72.7078, 23.2829],
	sw: [72.428, 22.9156],
};

const CENTER = [72.5714, 23.0225]

const startStyle = {
	iconImage: startIcon,
	iconSize: 0.2,
	iconAnchor: 'bottom',
	iconAllowOverlap: true,
}

class HomeView extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.mapRef = React.createRef();
	}

	renderRoute = () => {
		const { route } = this.props;

		if (!route.geometry) {
			return null
		}
		let geoJSON = polyline.toGeoJSON(route.geometry)
		const feature = MapboxGL.geoUtils.makeFeature(geoJSON);
		console.log(JSON.stringify(geoJSON))
		return (
			<>
				<MapboxGL.ShapeSource id={'routeSource' + route.id} shape={feature}>
					<MapboxGL.LineLayer
						id={'routeFill' + route.id}
						style={BUS}
					/>
				</MapboxGL.ShapeSource>
			</>
		)
	}

	renderTrackingLogic = () => {
		const { route } = this.props;

		if (!route.geometry) {
			return null;
		}
		return <BgTracking />;
	}

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<MapboxGL.MapView
					ref={c => (this.mapRef = c)}
					styleURL={MapboxGL.StyleURL.Street}
					style={styles.map}
					logoEnabled={false}
					attributionEnabled={false}
					regionWillChangeDebounceTime={100}>
					<MapboxGL.Camera
						zoomLevel={12}
						maxBounds={MAP_BOUNDS}
						maxZoomLevel={MAX_ZOOM}
						minZoomLevel={MIN_ZOOM}
						animationMode={'flyTo'}
						animationDuration={1000}
						centerCoordinate={CENTER}
					/>
					{this.renderRoute()}
				</MapboxGL.MapView>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		route: state.route,
	}
}

export default connect(mapStateToProps)(HomeView);

