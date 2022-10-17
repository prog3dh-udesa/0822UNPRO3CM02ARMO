import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { Component } from 'react'
import { auth } from '../../firebase/config'

class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }


    componentDidMount(){
      auth.onAuthStateChanged(user => {
          console.log(user)
          if(user !== null){
            this.props.navigation.navigate('TabNavigation')
          }
      })
    }

    loguear(email, password){
        auth.signInWithEmailAndPassword(email, password)
        .then(resp => {
            this.props.navigation.navigate('TabNavigation')
        })
        .catch( err => console.log(err))
    }
  render() {
    return (
      <View>
        <Text>Login</Text>
        <TextInput
            style={styles.input}
            keyboardType='email-address'
            placeholder='Ingresa tu email'
            onChangeText={text => this.setState({email: text})}
            value={this.state.email}
        />
        <TextInput
            style={styles.input}
            keyboardType='default'
            placeholder='Ingresa tu Password'
            onChangeText={text => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
        />
        <View>
            <TouchableOpacity onPress={()=> this.loguear(this.state.email, this.state.password)}>
                <Text>Log In</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1
    }
})

export default LoginScreen