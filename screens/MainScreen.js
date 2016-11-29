import React from 'react';
import { ScrollView, RefreshControl, Alert, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import PhotoDetail from '../components/PhotoDetail';
import photosData from '../data/photos.json';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handlePhotoRefresh = this.handlePhotoRefresh.bind(this);
    this.state = {
      refreshing: false
    };
  }
  handlePhotoRefresh() {
    this.setState({ refreshing: true });

    setTimeout(() => {
      Alert.alert(
        'Photo Refresh Failed',
        'No more photos in this version 😪'
      );
      this.setState({ refreshing: false });
    }, 1000);
  }

  render() {
    const photos = photosData.map((photo, idx) => (
      <PhotoDetail photo={photo} key={idx} />
    ));
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            title="Searching new photos..."
            titleColor="#999"
            style={{ backgroundColor: 'transparent' }}
            refreshing={this.state.refreshing}
            onRefresh={this.handlePhotoRefresh}
          />
        }
        style={styles.container}
      >
        {photos}
      </ScrollView>
    );
  }
}

MainScreen.route = {
  navigationBar: {
    visible: true,
    title: 'Workshop - part 1',
    backgroundColor: Colors.rmotrB,
    tintColor: '#FFF'
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE'
  }
});

export default MainScreen;
