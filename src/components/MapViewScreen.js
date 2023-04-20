import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { COLORS } from '../common/Colors';
import { CommonStyles } from '../common/Styles';
import { RFPercentage } from 'react-native-responsive-fontsize';
import HeaderMapView from '../common/Headers/HeaderMapView';
import MapView, { Marker } from 'react-native-maps';
import { request, requestMultiple, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import GetLocation from 'react-native-get-location'
import IconIndex from '../assets/Icons/IconIndex';

export default MapViewScreen = ({ navigation }) => {

  const [markerVisible, setMarkerVisible] = useState(false);
  const [initLocation, setInitLocation] = useState({
    latitude: 31.078387136880117,
    longitude: 81.32856114547349,
  });
  const [currentLocation, setCurrentLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const mapRef = useRef(null);

  useEffect(() => {
    getCurntLocation()
  }, [])
  // useEffect(() => {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       setLocation(position.coords);
  //       console.log(position);
  //     },
  //     (error) => {
  //       // See error code charts below.
  //       console.log(error);
  //       // console.log(error.code, error.message);
  //     },
  //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  //   );
  // }, [])
  const getCurntLocation = async () => {
    await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 1000,
    })
      .then(location => {
        setCurrentLocation(location);
        console.log(location);
      })
      .catch(error => {
        const { code, message } = error;
        console.log(code, message);
      })
  }

  return (
    <View style={[styles.container, CommonStyles.verticalPadding]}>
      <HeaderMapView />
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            // 31.078387136880117, 81.32856114547349
            latitude: initLocation.latitude,
            longitude: initLocation.longitude,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
        >
          {
            markerVisible ? <Marker coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }} /> : null
          }

        </MapView>
        <TouchableOpacity style={styles.gpsBtnContainer} onPress={() => {
          setMarkerVisible(!markerVisible)
        }}>
          <Image source={IconIndex.gpsBtn} style={styles.gpsBtnImg} />
        </TouchableOpacity>
      </View>
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
  mapContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    flex: 1,
    marginVertical: RFPercentage(2),
    width: '95%',
    // borderWidth: RFPercentage(0.1),
    // borderColor: COLORS.black,
    // ...StyleSheet.absoluteFillObject,
  },
  gpsBtnContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: RFPercentage(3),
    marginBottom: RFPercentage(3),
    padding: RFPercentage(1),
    backgroundColor: COLORS.green,
    borderRadius: RFPercentage(1)
  },
  gpsBtnImg: {
    height: RFPercentage(5),
    width: RFPercentage(5),
    tintColor: COLORS.black,
  },
})

