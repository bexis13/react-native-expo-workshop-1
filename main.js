import Expo from 'expo';
import React from 'react';
import { View, ScrollView, Platform,
         StatusBar, RefreshControl, Alert,
         StyleSheet } from 'react-native';
import Header from './components/Header';
import PhotoDetail from './components/PhotoDetail';
import photosData from './data/photos.json';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
    };

    this.handlePhotoRefresh = this.handlePhotoRefresh.bind(this);
  }

  handlePhotoRefresh() {
    /*
      YOUR ASSIGNMENT:
      When the user scrolls down forcing an update,
      you should display the loading indicator.
      TIP: https://facebook.github.io/react-native/docs/refreshcontrol.html
    */
  }

  render() {
    /*
      YOUR ASSIGNMENT:
      Show all the photos from photos.json, not only the first one.
      TIP: you should use a map function.
    */
    const photos = <PhotoDetail photo={photosData[0]} key={0} />;

    return (
      <View style={styles.container}>
        <Header headerText={'Workshop - part 1'} />

        {/*
          YOUR ASSIGNMENT:
          When the user scrolls down forcing an update,
          you should display the loading indicator.
          TIP: https://facebook.github.io/react-native/docs/refreshcontrol.html
        */}
        <ScrollView>
          {photos}

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
