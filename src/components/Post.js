import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>#{post.id}</Text>
        </View>
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

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};
