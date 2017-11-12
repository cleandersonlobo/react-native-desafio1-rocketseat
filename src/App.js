import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Post from './components/Post';
import '../ReactotronConfig';
import styles from './styles';

const POST_EXAMPLE = {
  id: 1,
  title: 'Aprendendo React Native',
  author: '@cleandersonlobo',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra ullamcorper dolor tempor interdum. Morbi sagittis non elit non ullamcorper. Integer id magna lacinia, semper justo sed, congue odio.',
};
export default class App extends Component {
  state = {
    posts: [
      POST_EXAMPLE,
    ],
  };
  addPost = () => {
    this.setState({
      posts: [
        ...this.state.posts,
        {
          id: this.generateId(),
          title: 'Aprendendo React Native',
          author: '@cleandersonlobo',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra ullamcorper dolor tempor interdum. Morbi sagittis non elit non ullamcorper. Integer id magna lacinia, semper justo sed, congue odio.',
        },
      ],
    });
  };
  generateId = () => this.state.posts.length + 1;
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>GoNative App</Text>
          </View>
          <View style={styles.rightHeader}>
            <TouchableOpacity onPress={() => this.addPost()}>
              <Text style={styles.buttonSize}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          ref={(c) => { this.scrollView = c; }}
          onContentSizeChange={(width, height) => {
            this.scrollView.scrollTo({ y: height, animated: true });
          }}
        >
          {this.state.posts.map(post => <Post key={post.id} post={post} />)}
        </ScrollView>
      </View>
    );
  }
}
