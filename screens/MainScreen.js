import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import PhotoDetail from '../components/PhotoDetail';
import photosData from '../data/photos.json';

class MainScreen extends React.Component {
  render() {
    const photos = photosData.map((photo, idx) => (
      <PhotoDetail photo={photo} key={idx} />
    ));
    return (
      <ScrollView style={styles.container}>
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
