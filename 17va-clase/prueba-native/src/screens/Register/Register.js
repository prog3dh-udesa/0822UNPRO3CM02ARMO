import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import {auth, db} from '../../firebase/config'

class Register extends Component {
    constructor(){
        super()
        this.state ={
            userName:'',
            mail:'',
            pass:''
        }
    }

    registrarUsuario(username, email, password){
        if(
            this.state.userName.length > 5 &&
            this.state.mail.includes('@') &&
            this.state.mail.includes('.') &&
            this.state.pass.length >= 6
        ){
            auth.createUserWithEmailAndPassword(email, password)
            .then(() => 
                db.collection('users').add({
                   email:email,
                   username:username,
                   createdAt:Date.now()
                })
            )
            .then(resp => console.log(resp))
            .catch(err => console.log(err))      
        } else {
            console.log('Fallo en los campos')
        }
    }

  render() {
    return (
    <View style={styles.container}>
        <View>
            <Text>Formulario</Text>
            <TextInput
                style={styles.input}
                placeholder='Escribe tu nombre de usuario'
                keyboardType='email-address'
                onChangeText={text => this.setState({userName: text})}
                value={this.state.userName}
            />
            <TextInput
            style={styles.input}
            placeholder='Escribe tu email'
            keyboardType='email-address'
            onChangeText={text => this.setState({mail: text})}
            value={this.state.mail}
        />
            <TextInput
                style={styles.input}
                placeholder='Escribe tu password'
                keyboardType='default'
                onChangeText={text => this.setState({pass: text})}
                value={this.state.pass}
                secureTextEntry={true}
            />
            <View>
                <TouchableOpacity onPress={()=> this.registrarUsuario(this.state.userName, this.state.mail,  this.state.pass)}>
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