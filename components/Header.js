import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const Header = props => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>
      {props.headerText}
    </Text>
  </View>
);

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: Colors.rmotrB,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 10,
  },

  textStyle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Header;
