import { AppState, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../common/Colors';
import { CommonStyles } from '../common/Styles';
import Button from '../common/CommonComponents/Button';
import IconIndex from '../assets/Icons/IconIndex';
import { useIsFocused } from '@react-navigation/native';
import HeaderEventListener from '../common/Headers/HeaderEventListener';

export default EventListener = ({ navigation }) => {
  const [val, useVal] = useState(0);
  const isFocused = useIsFocused();

  const [appState, setAppState] = useState(AppState.currentState);
  const handleAppStateChange = (state) => {
    setAppState(state);
  }
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return (() => {
      AppState.removeEventListener('change', handleAppStateChange);
    })
  }, []);
  // useEffect(() => {
  //   console.log(appState);
  // });

  return (
    <View style={[styles.container, CommonStyles.verticalPadding]}>
      <HeaderEventListener />
      <View style={{ flex: 1, justifyContent: 'flex-end', width: '100%', paddingHorizontal: RFPercentage(2), paddingVertical: RFPercentage(1.5) }}>
        <Text>{ }</Text>
      </View>
      <View style={{ flex: 1, width: '100%', paddingHorizontal: RFPercentage(5), justifyContent: 'center' }}>
        <Button title={'Click'} onPress={() => { }} />
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
