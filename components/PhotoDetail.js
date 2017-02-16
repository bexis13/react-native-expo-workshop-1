import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import Image from 'react-native-image-progress';
import PhotoHeader from '../components/PhotoHeader';
import PhotoFooter from '../components/PhotoFooter';
import PhotoCommentBox from '../components/PhotoCommentBox';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        '✨ React Native at rmotr.com ✨',
        'Mobile dev 👾📲',
      ],
      commentText: '',
      isLiked: false,
    };

    this.handleLikePhoto = this.handleLikePhoto.bind(this);
    this.handleCommentTextChange = this.handleCommentTextChange.bind(this);
    this.handleCommentSavePress = this.handleCommentSavePress.bind(this);
  }

  handleLikePhoto() {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  }

  handleCommentSavePress() {
    const comments = this.state.comments;
    comments.push(this.state.commentText);
    this.setState({ comments, commentText: '' });
  }

  handleCommentTextChange(text) {
    this.setState({ commentText: text });
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <PhotoHeader
          profile={this.props.photo.profile}
          name={this.props.photo.name}
          location={this.props.photo.location}
        />

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: this.props.photo.url }}
            alt={this.props.photo.name}
          />
        </View>

        <PhotoFooter
          comments={this.state.comments}
          isLiked={this.state.isLiked}
          likes={this.props.photo.likes}
          handleLikePhoto={this.handleLikePhoto}
        />

        <PhotoCommentBox
          handleCommentSavePress={this.handleCommentSavePress}
          commentText={this.state.commentText}
          handleCommentTextChange={this.handleCommentTextChange}
        />
      </View>
    );
  }
}

PhotoDetail.propTypes = {
  photo: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },

  imageContainer: {
    alignItems: 'stretch',
  },

  image: {
    flex: 1,
    height: 400,
  },
});

export default PhotoDetail;
