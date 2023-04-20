import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../common/Colors';
import { CommonStyles } from '../common/Styles';
import HeaderHome from '../common/Headers/HeaderHome';
import Button from '../common/CommonComponents/Button';

import { openDatabase } from 'react-native-sqlite-storage';
import IconIndex from '../assets/Icons/IconIndex';
import { useIsFocused } from '@react-navigation/native';

let db = openDatabase({ name: 'UserDatabase.db' });

export default HomeScreen = ({ navigation }) => {
  const isFocused = useIsFocused();

  return (
    <View style={[styles.container, CommonStyles.verticalPadding]}>
      <HeaderHome />
      {/* <View style={{ flex: 1, justifyContent: 'flex-end', width: '100%', paddingHorizontal: RFPercentage(2), paddingVertical: RFPercentage(1.5) }}>
      </View> */}
      <View style={{ flex: 1, width: '100%', paddingHorizontal: RFPercentage(5), justifyContent: 'center' }}>
        <Button title={'User Data'} onPress={() => navigation.navigate('userDataListing')} />
        <Button title={'Deep Linking'} onPress={() => navigation.navigate('deepLinking')} />
        <Button title={'Event Listener'} onPress={() => navigation.navigate('eventListener')} />
        <Button title={'Map View'} onPress={() => navigation.navigate('mapView')} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLORS.blue,
  },
  text: {
    fontSize: RFPercentage(5),
    fontWeight: '800',
    color: COLORS.white,
  },
  userText: {
    fontSize: RFPercentage(2.5),
  }
})
