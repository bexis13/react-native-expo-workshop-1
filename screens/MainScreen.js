import React from 'react';
import { View, ScrollView, StatusBar, Platform, StyleSheet } from 'react-native';
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

        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
      </ScrollView>
    );
  }
}

MainScreen.navigationOptions = {
  title: 'Workshop - part 1',
  header: {
    tintColor: '#FFF',
    style: {
      backgroundColor: Colors.rmotrB,
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
});

export default MainScreen;
