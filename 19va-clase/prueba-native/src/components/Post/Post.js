import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

class Post extends Component {

    constructor(props){
        super(props)
        this.state = {
            likesCount:props.data.likes.length,
            commentCount: props.data.comments.length,
            isMyLike: false
        }
    }


    

  render() {
    return (
      <View>
        <Text>{this.props.data.description}</Text>
        
        {
           this.state.isMyLike ?
                <TouchableOpacity>
                    <Text>Unlike</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity>
                    <Text>Like</Text>
                </TouchableOpacity>

        }
      </View>
    )
  }
}

export default Post