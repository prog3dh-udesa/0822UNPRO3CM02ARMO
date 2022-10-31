import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class Contador extends Component{
    
    constructor(){
        super()
        this.state={
            count:0
        }
    
    }

    aumentar(){
        this.setState({
            count: this.state.count + 1
        })
    }

    aumentar5(){
        this.setState({
            count: this.state.count + 5
        })
    }
    
    render(){
        return(
        <View>
            <Text>Mi cuenta es:{this.state.count}</Text>
            <TouchableOpacity
            onPress={()=> this.aumentar()}
            onLongPress={()=> this.aumentar5()}
            >
                <Text>Incrementar contador</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

export default Contador