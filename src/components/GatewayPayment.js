import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../common/Colors';
import { CommonStyles } from '../common/Styles';
import Button from '../common/CommonComponents/Button';
import IconIndex from '../assets/Icons/IconIndex';
import { useIsFocused } from '@react-navigation/native';
import HeaderMessaging from '../common/Headers/HeaderMessaging';
import HeaderStripePayment from '../common/Headers/HeaderStripePayment';
import HeaderGatewayPayment from '../common/Headers/HeaderGatewayPayment';


export default GatewayPayment = ({ navigation }) => {
  const isFocused = useIsFocused();
  return (
    <View style={[styles.container, CommonStyles.verticalPadding]}>
      <HeaderGatewayPayment />
      <View style={styles.subContainer}>
        {/* <Text>1</Text> */}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: COLORS.blue,
  },
  text: {
    fontSize: RFPercentage(5),
    fontWeight: '800',
    color: COLORS.white,
  },
  userText: {
    fontSize: RFPercentage(2.5),
  },
  subContainer: {
    flex: 1,
    backgroundColor: COLORS.blue
  }
})
