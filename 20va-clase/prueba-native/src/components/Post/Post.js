import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import {FontAwesome} from '@expo/vector-icons'
import {db, auth} from '../../firebase/config'
import firebase from 'firebase'

class Post extends Component {

    constructor(props){
        super(props)
        this.state = {
            likesCount:props.data.likes.length,
            commentCount: props.data.comments.length,
            isMyLike: false
        }
    }

    componentDidMount(){
      let myLike = this.props.data.likes.includes(auth.currentUser.email)
      if(myLike){
        this.setState({
          isMyLike:true
        })
      }
    }

    like(){
      db
      .collection('posts')
      .doc(this.props.id)
      .update({
        likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
      })
      .then(()=> {
        this.setState({
          isMyLike:true,
          likesCount: this.state.likesCount + 1
        })
      })
      .catch(err => console.log(err))

    }

    unlike(){
      db
      .collection('posts')
      .doc(this.props.id)
      .update({
        likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
      })
      .then(()=> {
        this.setState({
          isMyLike:false,
          likesCount: this.state.likesCount - 1
        })
      })
      .catch(e => console.log(e))
    }
    

  render() {
    console.log(this.props)
    return (
      <View>
        <Text>{this.props.data.description}</Text>
        <View>
        <Text>{this.state.likesCount}</Text>  
        {
           this.state.isMyLike ?
                <TouchableOpacity onPress={()=> this.unlike()}>
                    <FontAwesome name='heart' color='black' size={16} />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={()=> this.like()}>
                    <FontAwesome name='heart-o' color='red' size={16} />
                </TouchableOpacity>

        }
        </View>
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Comments')}>
            <Text>Agregar comentario</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    )
  }
}

export default Post