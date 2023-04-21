import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen';
import UpdateUser from '../components/UpdateUser';
import AddNewUser from '../components/AddNewUser';
import UserDataListing from '../components/UserDataListing';
import DeepLink from '../components/DeepLink';
import EventListener from '../components/EventListener';
import MapViewScreen from '../components/MapViewScreen';
import Messaging from '../components/Messaging';
import StripePayment from '../components/StripePayment';
import GatewayPayment from '../components/GatewayPayment';
import KeyboardAvoiding from '../components/KeyboardAvoiding';
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
      <Stack.Screen name='userDataListing' component={UserDataListing} />
      <Stack.Screen name='addNewUser' component={AddNewUser} />
      <Stack.Screen name='updateUser' component={UpdateUser} />
      <Stack.Screen name='deepLinking' component={DeepLink} />
      <Stack.Screen name='eventListener' component={EventListener} />
      <Stack.Screen name='mapView' component={MapViewScreen} />
      <Stack.Screen name='messaging' component={Messaging} />
      <Stack.Screen name='stripePayment' component={StripePayment} />
      <Stack.Screen name='gatewayPayment' component={GatewayPayment} />
      <Stack.Screen name='keyboardAvoiding' component={KeyboardAvoiding} />
    </Stack.Navigator>
  )
}



const styles = StyleSheet.create({})
