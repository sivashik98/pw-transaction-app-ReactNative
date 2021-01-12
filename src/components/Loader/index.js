import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {compose} from '../../helpers/stylecompose';

const defaultColor = '#c10e00';

const Loader = ({size = 'small', color, containerStyles}) => {
  return (
    <View style={compose(styles.loader, containerStyles)}>
      <ActivityIndicator size={size} color={color || defaultColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
