import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { db, auth } from '../../firebase/config'

class Posts extends Component {
    constructor(){
        super()
        this.state = {
            comentario:''        
        }
    }

    enviarComentario(comentario){
        db.collection('posts').add({
            owner:auth.currentUser.email,
            date: Date.now(),
            comment: comentario,
            likes:[],
            comments:[]
        })
        .then(()=>{
            this.setState({comentario:''})
        })
        .catch(err => console.log(err))
    }


    render() {
        return (
        <View>
            <Text>Crea tu posteo</Text>
            <TextInput
                keyboardType='default'
                placeholder='Escribi tu comentario'
                onChangeText={text => this.setState({comentario: text})}
                style = {styles.input}
                value={this.state.comentario}
            />
            <View>
                <TouchableOpacity onPress={()=> this.enviarComentario(this.state.comentario)}>
                    <Text>Enviar comentario</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        height:64,
        borderWidth:1
    }
})

export default Posts