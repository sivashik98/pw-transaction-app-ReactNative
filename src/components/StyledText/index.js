import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {compose} from '../../helpers/stylecompose';

const StyledText = ({styles, children, ...rest}) => {
  return (
    <Text style={compose(defaultStyles.styledText, styles)} {...rest}>
      {children}
    </Text>
  );
};

const defaultStyles = StyleSheet.create({
  styledText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default StyledText;
