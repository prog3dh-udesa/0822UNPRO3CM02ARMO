import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class FriendProfile extends Component {
    constructor(props){
        super(props)
    }
  render() {
    console.log(this.props)
    return (
      <View>
        <Text>FriendProfile</Text>
      </View>
    )
  }
}