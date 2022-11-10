import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home/Home'
import FriendProfile from '../screens/FriendProfile/FriendProfile'

const Stack = createNativeStackNavigator()

export default class HomeNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
            name='Home'
            component={Home}
        />
        <Stack.Screen
            name='FriendProfile'
            component={FriendProfile}
        />
      </Stack.Navigator>
    )
  }
}