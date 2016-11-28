import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@exponent/vector-icons';
import { withNavigation } from '@exponent/ex-navigation';
import Router from '../navigation/Router';
import Colors from '../constants/Colors';

@withNavigation
// this could be a stateless function, but we can't define it
// like that becouse @withNavigation requires React.Component
class PhotoFooter extends React.Component {
  constructor(props) {
    super(props);

    this.goToComments = this.goToComments.bind(this);
  }

  goToComments() {
    this.props.navigator.push(Router.getRoute('photoComments'));
  }

  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.footerTop}>
          <TouchableOpacity>
            <Ionicons
              style={styles.footerIcon}
              name={this.props.isLiked ? 'ios-heart' : 'ios-heart-outline'}
              color={this.props.isLiked ? Colors.danger : '#555'}
              onPress={this.props.likePhoto}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons
              style={styles.footerIcon}
              name="ios-chatboxes-outline"
              color="#555"
              onPress={this.goToComments}
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
            {this.props.isLiked ? this.props.likes + 1 : this.props.likes}
            {this.props.likes === 1 || (this.props.likes === 0 && this.props.isLiked) ? ' Like' : ' Likes'}
          </Text>
        </View>

        <View>
          <Text style={styles.footerHour}>
            {'15 hours ago'.toUpperCase()}
          </Text>
        </View>
      </View>
    );
  }
}

PhotoFooter.propTypes = {
  likes: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likePhoto: PropTypes.func.isRequired,
  navigator: PropTypes.array
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'column',
    padding: 5,
    paddingLeft: 7
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
