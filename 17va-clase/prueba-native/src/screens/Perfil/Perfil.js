import { View, Text } from 'react-native'
import React, {Component} from 'react'
import {db, auth} from '../../firebase/config'
class Perfil extends Component {
  constructor(){
    super()
  }


  componentDidMount(){
    console.log(auth.currentUser)
    db.collection('users').onSnapshot( docs => {
      let users = []
      docs.forEach(doc => {
        users.push({
          id: doc.id,
          userdata: doc.data()
        })
      })
    })
  }


  render(){
    return (
      <View>
        <Text>Perfil</Text>
      </View>
    )
  }
}

export default Perfil