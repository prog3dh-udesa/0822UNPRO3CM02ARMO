import { Component } from 'react';
import Hola from './src/components/Hola/Hola';
import { Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './src/firebase/config';

import LoginScreen from './src/screens/Login/LoginScreen';
import TabNav from './src/navigation/TabNav';
import Clase from './src/screens/ClaseForms/Clase';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  constructor(){
    super()
  }

  componentDidMount(){
  }
  
  render(){
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen 
              name='TabNavigation' 
              component={TabNav}
              options={{
                headerShown:false
              }}
              />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
