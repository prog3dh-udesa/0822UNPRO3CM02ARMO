import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Home from '../screens/Home/Home'
import ProfileFriends from '../screens/ProfileFriends/ProfileFriends'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack =  createNativeStackNavigator()

export default class HomeNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
            component={Home}
            name='Home'
            options={{
                headerShown:false
            }}
        />
        <Stack.Screen
            component={ProfileFriends}
            name='ProfileFriends'
            options={{
                headerShown:false
            }}
        />
      </Stack.Navigator>
    )
  }
}