import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import {compose, when} from '../../helpers/stylecompose';
import StyledText from '../StyledText';

const activeOpacity = 0.6;

const StyledButton = ({
  text,
  primary,
  outline,
  disabled,
  containerStyle,
  iconStyle,
  iconProps,
  icon: Icon,
  onPress,
  ...rest
}) => {
  const Button = disabled ? View : TouchableOpacity;

  const handlePress = () => {
    onPress && onPress();
  };

  return (
    <View
      style={compose(
        styles.styledButton,
        when(primary, styles['styledButton--primary']),
        when(primary && disabled, styles['styledButton--primaryDis']),
        when(outline, styles['styledButton--outline']),
        containerStyle,
      )}>
      <Button
        accessibilityRole="button"
        style={styles.styledButton__wrap}
        activeOpacity={activeOpacity}
        onPress={handlePress}
        {...rest}>
        <StyledText
          style={compose(
            styles.styledButton__text,
            when(primary, styles['styledButton__text--primary']),
            when(outline, styles['styledButton__text--outline']),
            when(outline && disabled, styles['styledButton__text--outlineDis']),
          )}>
          {text}
        </StyledText>

        {Icon ? <Icon style={iconStyle} {...iconProps} /> : null}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  styledButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#A7B4CA',
  },

  'styledButton--primary': {
    backgroundColor: '#1F88E5',
    borderColor: '#1F88E5',
  },

  'styledButton--primaryDis': {
    backgroundColor: 'rgba(31, 136, 229, 0.5)',
    opacity: 0.7,
  },

  'styledButton--outline': {
    backgroundColor: 'transparent',
    borderColor: '#CCD5E5',
  },

  'styledButton--defaultDis': {
    backgroundColor: '#F5F7FA',
  },

  styledButton__wrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
  },

  styledButton__text: {
    color: '#576989',
    fontFamily: 'Roboto-Medium',
    lineHeight: 20,
    letterSpacing: 0.75,
    fontSize: 16,
    flexGrow: 1,
    textAlign: 'center',
  },

  'styledButton__text--primary': {
    color: '#fff',
  },

  'styledButton__text--outline': {
    fontFamily: 'Roboto-Regular',
  },

  'styledButton__text--outlineDis': {
    color: '#B4C3D7',
  },
});

export default StyledButton;
