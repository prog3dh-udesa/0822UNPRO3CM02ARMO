import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackView } from '@react-navigation/native-stack';

import TabNavigation from './TabNavigation';
import LoginScreen from '../screens/Login/LoginScreen';
import Register from '../screens/Register/Register';
import Comments from '../screens/Comments/Comments';

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
        <Stack.Screen
          name='Comments'
          component={Comments}
        />  
        
        </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainNavigation