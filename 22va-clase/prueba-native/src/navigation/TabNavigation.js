import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {FontAwesome} from '@expo/vector-icons'
import Perfil from '../screens/Perfil/Perfil'
import Posts from '../screens/Posts/Posts'
import Home from '../screens/Home/Home'
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
        name='Perfil'
        component={Perfil}
        options={{
            tabBarIcon: () => <FontAwesome name='music' size={32} color='red' />
        }}
        />
        <Tab.Screen
        name='NewPost'
        component={Posts}
        />
    </Tab.Navigator>
  )
}