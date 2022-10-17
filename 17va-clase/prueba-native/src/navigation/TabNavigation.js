import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {FontAwesome} from '@expo/vector-icons'
import Home from '../screens/Home/Home'
import Prueba from '../screens/Prueba/Prueba'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
        name='Home' 
        component={Home}
        options={{
            tabBarIcon: () => <FontAwesome name='home' size={32} color='red' />
        }}
        />
        <Tab.Screen
        name='prueba'
        component={Prueba}
        options={{
            tabBarIcon: () => <FontAwesome name='music' size={32} color='red' />
        }}
        />
    </Tab.Navigator>
  )
}