import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Hola extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Hola chicas y chicos, bienvenido a Native</Text>
                <Text>ESTE ES OTRO TEXTO</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:300,
    },
    title:{
        color:'red',
        fontSize:24,
    }
})



export default Hola