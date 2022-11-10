import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import {auth, db} from '../../firebase/config'
import Camara from '../../components/Camara/Camara'

class Posts extends Component {

    constructor(){
        super()
        this.state={
            description:'',
            mostrarCamara:true,
            fotoUrl:''
        }
    }

    enviarPost(description){
        db.collection('posts').add({
            owner:auth.currentUser.email,
            createdAt: Date.now(),
            description: description,
            likes:[],
            comments:[],
            foto: this.state.fotoUrl
        })
        .then(resp => console.log('hizo el posteo'))
        .catch(err => console.log(err))

    }

    cuandoSubaLaImagen(url){
        this.setState({
            mostrarCamara:false,
            fotoUrl: url
        })
    }


    render() {
        return (
        <View style = {styles.container}>
            {
                this.state.mostrarCamara ?
                <Camara
                cuandoSubaLaImagen = {(url)=> this.cuandoSubaLaImagen(url)}
                /> :
              <View>
                <TextInput
                    keyboardType='default'
                    onChangeText={text => this.setState({description:text})}
                    value={this.state.description}
                    style={styles.input}
                    placeholder='Deja tu descripcion'
                />
                <TouchableOpacity
                onPress={()=> this.enviarPost(this.state.description)}
                >
                    <Text>Enviar Post</Text>
                </TouchableOpacity>
              </View>  
            }
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }, 
    input:{
        borderWidth:1,
        height:48
    }
})

export default Posts