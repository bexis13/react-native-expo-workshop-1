import Expo from 'expo';
import React from 'react';
import { View, ScrollView, Platform,
         StatusBar, StyleSheet } from 'react-native';
import Header from './components/Header';
import PhotoDetail from './components/PhotoDetail';
import photosData from './data/photos.json';

class AppContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Workshop - part 1'} />

        <ScrollView>
          <PhotoDetail photo={photosData[0]} />

          {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
});

Expo.registerRootComponent(AppContainer);
