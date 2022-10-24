import { Text, View } from 'react-native'
import React, { Component } from 'react'

class Post extends Component {
    constructor(props){
        super(props)
        this.state={
            likesCount:0,
            isMyLike:false
        }
    }
    render() {
        return (
        <View>
            <Text>{this.props.description}</Text>
        </View>
        )
    }
}

export default Post