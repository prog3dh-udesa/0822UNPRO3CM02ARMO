import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import React, {Component} from 'react'
import Contador from '../../components/Contador/Contador'
import {info} from '../../api/data'
import {db} from '../../firebase/config'
import Post from '../../components/Post/Post'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      allPosts:[]
    }
  }

  componentDidMount(){
    db.collection('posts').onSnapshot(
      docs => {
        let posts = []
        docs.forEach(doc => {
          console.log(doc)
          posts.push({
            id:doc.id,
            data: doc.data()
          })
        })

        this.setState({
          allPosts: posts
        }, ()=> console.log(this.state.allPosts))
      }
    )
  }
  
  render(){
    return (
      <>
        <View style={styles.container1}>
          <Text>Home</Text>
          <Contador />
        </View>
        {
          this.state.allPosts.length > 0 ?
          <View style={styles.container3}>
            <FlatList
              data={this.state.allPosts}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => <Post info={item.data}/>}
            />
          </View>
          : ''
        }
      </>
    )
  }
}

const styles = StyleSheet.create({
  container1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  container2:{
    flex:3
  },
  container3:{
    flex:5
  },
  image:{
    height:300
  }
})

export default Home