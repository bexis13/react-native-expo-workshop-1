import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

import Button from 'react-native-button';


class PhotoCommentBox extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Add a comment..."
            autoCorrect={false}
          />
          <TouchableOpacity
            style={styles.commentText}
            onPress={this.saveComment}
          >
            <Text style={styles.text}>
               Post
             </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


PhotoCommentBox.propTypes = {
  handleNewComment: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    borderTopWidth: 1,
    borderColor: '#eee'
  },

  commentInput: {
    flex: 1,
    height: 40,
    fontSize: 13,
    padding: 10
  },

  commentText: {
    justifyContent: 'center',
    padding: 10
  },

  text: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: 'bold'
  },

  textOff: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
    opacity: 0.5
  }
});

export default PhotoCommentBox;
