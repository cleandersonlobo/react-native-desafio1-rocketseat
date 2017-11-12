import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default class Post extends Component {
  render() {
      const {post} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContent}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.author}>{post.author}</Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.bodyText}>
                {post.text}
            </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:20,
      backgroundColor:'#fff',
      shadowColor:'#DA6C6C',
      borderRadius:5,
      shadowRadius:5,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity:1,
      margin:20
    },
    titleContent:{
        paddingBottom:10
    },
    title:{
        color:'#333333',
        fontSize:16,
        fontWeight:'bold'
    },
    author:{
        color:'#999999'
    },
    content:{
        borderTopColor:'#eee',
        borderTopWidth:1,
        paddingTop:10,
    },
    bodyText:{
        color:'#666666'
    }
  });