import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import {auth} from '../../firebase/config'

class Register extends Component {
    constructor(){
        super()
        this.state ={
            input1:'',
            input2:''
        }
    }

    registrarUsuario(email, password){
        auth.createUserWithEmailAndPassword(email, password)
        .then(resp => this.props.navigation.navigate('Home'))
        .catch(err => console.log(err))      
    }

  render() {
    return (
    <View style={styles.container}>
        <View>
            <Text>Formulario</Text>
            <TextInput
                style={styles.input}
                placeholder='Escribe tu email'
                keyboardType='email-address'
                onChangeText={text => this.setState({input1: text})}
                value={this.state.input1}
            />
            <TextInput
                style={styles.input}
                placeholder='Escribe tu password'
                keyboardType='default'
                onChangeText={text => this.setState({input2: text})}
                value={this.state.input2}
                secureTextEntry={true}
            />
            <View>
                <TouchableOpacity onPress={()=> this.registrarUsuario(this.state.input1, this.state.input2)}>
                    <Text>Registrarme</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Ya tienes un cuenta?</Text>
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('Login')}>
                    <Text>Logueate</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      paddingHorizontal:24
    },
    input:{
        borderWidth:1
    },
    containerRedirect:{
        marginTop: 32
    }
  })
  

export default Register