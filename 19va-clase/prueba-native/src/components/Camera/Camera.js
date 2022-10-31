import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Camera } from 'expo-camera'
import { storage } from '../../firebase/config'

export default class Camera extends Component {
    constructor(){
        super()
        this.state = {
            permisos:false,
            fotoUrl:'',
            mostrarCamara:false
        }
        metodosDeCamara
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
        .then(()=>{
            let ref = storage.ref(`photos/${Dat.now()}.jpg`)
            return ref.put(image)
        })
        .then()
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
            style
            type={Camera.Constants.Type.back}
            ref={metodosDelComponente => this.metodosDeCamara = metodosDelComponente}
        />
      </View>
    )
  }
}