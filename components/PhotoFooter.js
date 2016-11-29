import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@exponent/vector-icons';
import Colors from '../constants/Colors';

var moment = require('moment');

class PhotoFooter extends React.Component {
  constructor(props) {
    super(props);
    this.handleCommentPress = this.handleCommentPress.bind(this);
    this.handlePhotoDate = this.handlePhotoDate.bind(this);
    this.state = {
      comments: [
        '✨ React Native at rmotr.com ✨',
        'Mobile dev 👾📲'
      ],
      photoDate: moment().subtract(15, 'hours'),
      photoDisplay: 'fromNow'
    };
  }
  handleCommentPress() {
    const message = this.state.comments.join('\n');
    Alert.alert(
      'Comments',
      message,
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]
    );
  }
  handlePhotoDate() {
    this.setState({
      photoDisplay: (this.state.photoDisplay === 'fromNow' ? 'format' : 'fromNow')
    });
  }
  render() {
    const likes = this.props.likes + (this.props.isLiked ? 1 : 0);
    const photoDate = this.state.photoDate[this.state.photoDisplay]()
    return (
      <View style={styles.footer}>
        <View style={styles.footerTop}>
          <TouchableOpacity
            onPress={this.props.handleLikePhoto}
          >
            <Ionicons
              style={styles.footerIcon}
              name={this.props.isLiked ? 'ios-heart' : 'ios-heart-outline'}
              color={this.props.isLiked ? Colors.danger : '#555'}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleCommentPress}>
            <Ionicons
              style={styles.footerIcon}
              name="ios-chatboxes-outline"
              color="#555"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.footerBottom}>
          <Ionicons
            name="ios-heart"
            size={12}
            color={Colors.rmotrB}
          />

          <Text style={styles.footerText}>
            {likes}
            {likes === 1 ? ' Like' : ' Likes'}
          </Text>
        </View>

        <View>
          <Text style={styles.footerHour} onPress={this.handlePhotoDate}>
            {photoDate.toUpperCase()}
          </Text>
        </View>
      </View>
    );
  }
}

PhotoFooter.propTypes = {
  likes: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  handleLikePhoto: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'column',
    padding: 5,
    paddingLeft: 7,
    marginBottom: 10
  },

  footerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },

  footerIcon: {
    fontSize: 26,
    padding: 4,
    paddingRight: 10
  },

  footerBottom: {
    flexDirection: 'row',
    alignItems: 'center'

  },

  footerText: {
    color: Colors.rmotrB,
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 5
  },

  footerHour: {
    color: '#bbb',
    fontSize: 9,
    fontWeight: '400',
    paddingTop: 5
  }
});

export default PhotoFooter;
