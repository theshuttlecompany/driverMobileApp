import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import BgTracking from './BgTraking';

import styles from './styles';

const MAX_ZOOM = 17;
const MIN_ZOOM = 10;

const MAP_BOUNDS = {
  ne: [72.7078, 23.2829],
  sw: [72.428, 22.9156],
};

const CENTER = [72.5714, 23.0225]

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.mapRef = React.createRef();
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
        </MapboxGL.MapView>
        <BgTracking />
      </SafeAreaView>
    );
  }
}
