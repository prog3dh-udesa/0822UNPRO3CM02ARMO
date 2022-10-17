import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screens/Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome} from '@expo/vector-icons'

const Tab  = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name='Home' 
        component={Home}
        options = {{
          tabBarIcon: () => <FontAwesome name='home' size={24} color='red' />
          }}
      />
    </Tab.Navigator>
  )
}