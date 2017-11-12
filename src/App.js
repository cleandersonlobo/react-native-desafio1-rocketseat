import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity, 
} from 'react-native';
import Post from './components/Post';
import Reactotron from 'reactotron-react-native';
const POST_EXAMPLE = {
    id: 1,
    title: 'Aprendendo React Native',
    author: '@cleandersonlobo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra ullamcorper dolor tempor interdum. Morbi sagittis non elit non ullamcorper. Integer id magna lacinia, semper justo sed, congue odio.'
};
export default class App extends Component {
  state = {
    posts:[
      POST_EXAMPLE
    ],
  }
  generateId = () => (this.state.posts.length+1);
  addPost = () => {
      this.setState({
        posts:[
          ...this.state.posts,
          {
            id: this.generateId(),
            title: 'Aprendendo React Native',
            author: '@cleandersonlobo',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra ullamcorper dolor tempor interdum. Morbi sagittis non elit non ullamcorper. Integer id magna lacinia, semper justo sed, congue odio.'
          }
        ],
      })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>GoNative App</Text>
          </View>
          <View style={styles.rightHeader}>
            <TouchableOpacity onPress={()=>this.addPost()}>
              <Text style={styles.buttonSize}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView 
          ref='scrollView'
          onContentSizeChange={(width,height) => {
            this.refs.scrollView.scrollTo({x:width,y:height,animated:true});
          }}>
          {this.state.posts.map(post => (<Post key={post.id} post={post}/>))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
  headerTitle:{
    flex:1,alignItems:'center',
    justifyContent:'center'
  },
  header:{
    height:50,
    padding:20,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#fff',
  },
  rightHeader:{
    justifyContent:'flex-end',
    alignItems:'center',
    justifyContent:'center'
  },
  buttonSize:{
    fontSize: 30,
  },
  title: {
    fontSize: 20,
    color:'#424242',
    fontWeight:'bold'
  },
});
