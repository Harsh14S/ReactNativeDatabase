import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../common/Colors';
import { CommonStyles } from '../common/Styles';
import { RFPercentage } from 'react-native-responsive-fontsize';
import HeaderMapView from '../common/Headers/HeaderMapView';
import MapView from 'react-native-maps';
import { request, requestMultiple, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import GetLocation from 'react-native-get-location'

export default MapViewScreen = ({ navigation }) => {
  const [location, setLocation] = useState();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
        console.log(position);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, [])


  return (
    <View style={[styles.container, CommonStyles.verticalPadding]}>
      <HeaderMapView />
      <MapView
        style={styles.map}
        initialRegion={{
          // 31.078387136880117, 81.32856114547349
          latitude: 31.078387136880117,
          longitude: 81.32856114547349,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue
  },
  text: {
    fontSize: RFPercentage(5),
    fontWeight: '700',
    color: COLORS.black
  },
  map: {
    marginVertical: RFPercentage(2),
    flex: 1,
    width: '95%',
    // borderWidth: RFPercentage(0.1),
    // borderColor: COLORS.black,
    // ...StyleSheet.absoluteFillObject,
  },
})

