import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import PhotoDetail from '../components/PhotoDetail';
import photosData from '../data/photos.json';

class MainScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <PhotoDetail photo={photosData[0]} />
      </ScrollView>
    );
  }
}

MainScreen.route = {
  navigationBar: {
    visible: true,
    title: 'Workshop - part 1',
    backgroundColor: Colors.success,
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
