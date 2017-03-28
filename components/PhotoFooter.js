import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

class PhotoFooter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoDisplay: 'fromNow',
    };

    this.handleCommentPress = this.handleCommentPress.bind(this);
    this.handlePhotoDate = this.handlePhotoDate.bind(this);
  }

  handleCommentPress() {
    const message = this.props.comments.join('\n');
    Alert.alert(
      'Comments',
      message,
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
    );
  }

  handlePhotoDate() {
    /**
      YOUR ASSIGNMENT:
      Write a function that toggles between ISO string publishDate
      and human-format date, like "15 hours ago".
      TIP: it should change this.state.photoDisplay
    */
  }

  render() {
    const { publishDate, isLiked } = this.props;

    /*
      YOUR ASSIGNMENT:
      When the user taps on the _heart icon_,
      the number of likes should increase by 1.
    */
    const likes = this.props.likes;

    return (
      <View style={styles.footer}>
        <View style={styles.footerTop}>
          {/*
              YOUR ASSIGNMENT:
              When the user taps on the _heart icon_,
              it should turn filled red.
          */}
          <TouchableOpacity>
            <Ionicons
              style={styles.footerIcon}
              name="ios-heart-outline"
              color="#555"
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
          <Text style={styles.footerHour} onPress={() => {}}>
            {publishDate.toUpperCase()}
          </Text>
        </View>
      </View>
    );
  }
}

PhotoFooter.propTypes = {
  likes: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  publishDate: PropTypes.string.isRequired,
  handleLikePhoto: PropTypes.func,
  comments: PropTypes.array,
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'column',
    padding: 5,
    paddingLeft: 7,
    marginBottom: 10,
  },

  footerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  footerIcon: {
    fontSize: 26,
    padding: 4,
    paddingRight: 10,
  },

  footerBottom: {
    flexDirection: 'row',
    alignItems: 'center',

  },

  footerText: {
    color: Colors.rmotrB,
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 5,
  },

  footerHour: {
    color: '#bbb',
    fontSize: 9,
    fontWeight: '400',
    paddingTop: 5,
  },
});

export default PhotoFooter;
