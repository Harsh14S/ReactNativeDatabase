import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen';
import DataListing from '../components/DataListing';
import AddNewUser from '../components/AddNewUser';
const Stack = createNativeStackNavigator();

export default MainNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName=''
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='home' component={HomeScreen} />
      <Stack.Screen name='DataList' component={DataListing} />
      <Stack.Screen name='AddNewUser' component={AddNewUser} />
    </Stack.Navigator>
  )
}



const styles = StyleSheet.create({})
