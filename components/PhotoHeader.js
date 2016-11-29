import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity, Share, StyleSheet } from 'react-native';
import Image from 'react-native-image-progress';
import { Ionicons } from '@exponent/vector-icons';
import Colors from '../constants/Colors';

class PhotoHeader extends React.Component{
  openShareOptions() {
    return Share.share({
      url: 'https://rmotr.com',
      title: 'Learn to code in a remote classroom',
      message: 'Real teacher, real classmates, real assignments, but remote.',
      dialogTitle: 'Learn to code in a remote classroom'
    });
  }
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            style={styles.headerImage}
            source={{ uri: this.props.profile }}
            alt="Profile pic"
          />

          <View>
            <Text style={styles.headerText}>
              {this.props.name}
            </Text>

            <Text style={styles.headerLocation}>
              {this.props.location} &gt;
            </Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={this.openShareOptions}
          >
            <Ionicons
              name="md-share"
              size={24}
              color={Colors.rmotrB}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


PhotoHeader.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#eee'
  },

  headerText: {
    color: Colors.rmotrB,
    fontSize: 12,
    fontWeight: '700'
  },

  headerLocation: {
    fontSize: 11,
    fontWeight: '300'
  },

  headerRight: {
    marginRight: 10
  }
});

export default PhotoHeader;
