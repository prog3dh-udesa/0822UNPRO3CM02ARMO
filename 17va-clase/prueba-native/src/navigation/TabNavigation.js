import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {FontAwesome} from '@expo/vector-icons'
import Home from '../screens/Home/Home'
import Perfil from '../screens/Perfil/Perfil'
import HomeNavigation from './HomeNavigation'
const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
        name='HomeNavigation' 
        component={HomeNavigation}
        options={{
            tabBarIcon: () => <FontAwesome name='home' size={32} color='red' />,
            headerShown:false
        }}
        />
        <Tab.Screen
        name='Mi Perfil'
        component={Perfil}
        options={{
            tabBarIcon: () => <FontAwesome name='music' size={32} color='red' />,
            headerShown:false
        }}
        />
    </Tab.Navigator>
  )
}