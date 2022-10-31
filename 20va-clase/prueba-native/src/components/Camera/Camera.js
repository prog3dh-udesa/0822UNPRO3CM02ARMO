import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { Camera } from 'expo-camera'
import { storage } from '../../firebase/config'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Camara extends Component {
    constructor(){
        super()
        this.state = {
            permisos:false,
            fotoUrl:'',
            mostrarCamara:false
        }
        this.metodosDeCamara = null
    }

    componentDidMount(){
        Camera.requestCameraPermissionsAsync()
        .then(()=>{
            this.setState({
                mostrarCamara:true
            })
        })
        .catch(err => console.log(err))
    }

    tomarFoto(){
        this.metodosDeCamara.takePictureAsync()
        .then(photo => this.setState({
            fotoUrl: photo.uri,
            mostrarCamara:false
        }))
        .catch(error => console.log(error))
    }

    guardarFoto(url){
        fetch(url)
        .then(binarioGigante => binarioGigante.blob())
        .then( imagenEnFormatoApto =>{
            let ref = storage.ref(`photos/${Date.now()}.jpg`)
            ref.put(imagenEnFormatoApto)
            .then(()=>{
                ref.getDownloadURL()
                .then(url=> this.props.cuandoSeSubaLaFoto(url))
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        })
        .catch(error => console.log(error))
    }

    descartarFoto(){
        this.setState({
            fotoUrl:'',
        })
    }



  render() {
    return (
      <View>
        <Camera
            style ={styles.camara}
            type={Camera.Constants.Type.back}
            ref={metodosDelComponente => this.metodosDeCamara = metodosDelComponente}
        />
        <View>
            <TouchableOpacity onPress={()=> this.tomarFoto()}>
                <Text>Tomar Foto</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    camera:{
        flex:2,
    }
})