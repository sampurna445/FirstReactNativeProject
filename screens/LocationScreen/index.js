import React, {useEffect} from 'react';
import {View, Text, Platform} from 'react-native';
import {LocationHelper} from '../../helpers';
import MapView from 'react-native-maps';

const LocationScreen = () => {
  useEffect(() => {
    LocationHelper.fetchLocation(
      locationObject => {
        console.log(locationObject);
      },
      error => {
        console.log(error);
      },
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>Testing Location Service</Text>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default LocationScreen;
