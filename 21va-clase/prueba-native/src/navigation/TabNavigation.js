import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {FontAwesome} from '@expo/vector-icons'
import Home from '../screens/Home/Home'
import Perfil from '../screens/Perfil/Perfil'
import Posts from '../screens/Posts/Posts'

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