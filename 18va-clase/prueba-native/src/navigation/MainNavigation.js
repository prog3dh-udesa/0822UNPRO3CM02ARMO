import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackView } from '@react-navigation/native-stack';

import TabNavigation from './TabNavigation';
import LoginScreen from '../screens/Login/LoginScreen';
import Register from '../screens/Register/Register';
import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator()

function MainNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
        name='Login' 
        component={LoginScreen}
        options={{
            headerShown: false
        }}
        />
        <Stack.Screen
        name='Register'
        component={Register}
        options={{
            headerShown: false
        }}
        />
        <Stack.Screen
         name='TabNavigation'
         component={TabNavigation}
         options={{
          headerShown:false
         }}
        />     
        {/* <Stack.Screen name='Login' >
        {(props) => <LoginScreen {...props} metodo={metodo}  />}
        </ Stack.Screen> */}
        </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainNavigation