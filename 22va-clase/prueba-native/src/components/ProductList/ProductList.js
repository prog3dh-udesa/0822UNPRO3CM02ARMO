import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import {info} from '../../api/data'
import {products} from '../../api/dataProducts'
import Card from '../Card/Card'

class ProductList extends Component {
    constructor(){
        super()
        this.state={
            info: products
        }
    }
    render() {
    return (
      <View>
        <Text>ProductList</Text>
        <FlatList 
            data={this.state.info}
            keyExtractor={(item)=> item.id.toString()}
            renderItem={( {item} ) => <Card info={item} />}
        />
      </View>
    )
  }
}

export default ProductList