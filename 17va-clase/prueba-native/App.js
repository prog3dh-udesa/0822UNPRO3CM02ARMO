import { Component } from 'react';
import Hola from './src/components/Hola/Hola';
import { Text, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/Login/LoginScreen';
import Clase from './src/screens/ClaseForms/Clase';
import Register from './src/screens/Register/Register';


const Stack = createNativeStackNavigator()

let metodo = 'Soy una prueba'

export default function App() {
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
          {/* <Stack.Screen name='Login' >
          {(props) => <LoginScreen {...props} metodo={metodo}  />}
          </ Stack.Screen> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
}
