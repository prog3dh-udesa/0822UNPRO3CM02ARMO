import { Text, View } from 'react-native'
import React, { Component } from 'react'
import {db} from '../../firebase/config'

export default class ProfileFriends extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            mailFriend:props.route.params.email,
            postsFriend:[]
        }
    }

    componentDidMount(){
        db
        .collection('posts')
        .where('owner', '==', this.state.mailFriend)
        .onSnapshot(docs => {
            let posts = []
            docs.forEach(doc => posts.push({
                id:doc.id,
                data: doc.data()
            }))
            this.setState({
                postsFriend: posts
            }, ()=> console.log(this.state.postsFriend))
        })
    }
  render() {
    return (
      <View>
        <Text>ProfileFriends</Text>
      </View>
    )
  }
}