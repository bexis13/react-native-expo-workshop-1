import Exponent from 'exponent';
import React from 'react';
import MainStackNavigator from './navigators/MainStackNavigator';

class AppContainer extends React.Component {
  render() {
    return (
      <MainStackNavigator />
    );
  }
}

Exponent.registerRootComponent(AppContainer);
