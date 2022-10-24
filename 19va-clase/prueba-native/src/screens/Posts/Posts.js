import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import {auth, db} from '../../firebase/config'


class Posts extends Component {

    constructor(){
        super()
        this.state={
            description:''
        }
    }

    enviarPost(description){
        db.collection('posts').add({
            owner:auth.currentUser.email,
            createdAt: Date.now(),
            description: description,
            likes:[],
            comments:[]
        })
        .then(resp => console.log('hizo el posteo'))
        .catch(err => console.log(err))

    }



    render() {
        return (
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
        )
    }
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        height:48
    }
})

export default Posts