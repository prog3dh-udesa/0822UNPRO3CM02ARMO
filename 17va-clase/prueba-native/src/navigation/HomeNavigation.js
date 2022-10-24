import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import Home from "../screens/Home/Home";
import Login from '../screens/Login/LoginScreen'
import Register from "../screens/Register/Register";
const Stack = createNativeStackNavigator()

function HomeNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='ProfileUser'
                component={Login}
            />
            <Stack.Screen 
                name='Comentarios'
                component={Register}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigation