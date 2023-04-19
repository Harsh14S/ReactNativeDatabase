import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen';
import UpdateUser from '../components/UpdateUser';
import AddNewUser from '../components/AddNewUser';
import UserDataListing from '../components/UserDataListing';
import DeepLink from '../components/DeepLink';
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
    </Stack.Navigator>
  )
}



const styles = StyleSheet.create({})
