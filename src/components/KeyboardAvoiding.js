import { FlatList, Image, KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS } from '../common/Colors';
import { CommonStyles } from '../common/Styles';
import Button from '../common/CommonComponents/Button';
import IconIndex from '../assets/Icons/IconIndex';
import { useIsFocused } from '@react-navigation/native';
import HeaderKeyboardAvoidingView from '../common/Headers/HeaderKeyboardAvoidingView';
import TextInput from '../common/CommonComponents/TextInput';


export default KeyboardAvoiding = ({ navigation }) => {
  const isFocused = useIsFocused();
  return (
    <View style={[styles.container, CommonStyles.verticalPadding]}>
      <HeaderKeyboardAvoidingView />
      <KeyboardAvoidingView
        style={styles.subContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TextInput
          placeholder={"Enter your name"}
        />
      </KeyboardAvoidingView>
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
    // backgroundColor: COLORS.blue,
    justifyContent: 'flex-end'
  }
})
