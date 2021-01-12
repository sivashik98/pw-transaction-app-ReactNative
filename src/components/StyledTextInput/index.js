import React, {useState} from 'react';

import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

import StyledText from '../StyledText';
import ShowPasswordSvg from '../../../assets/svg/ShowPassword';
import HidePasswordSvg from '../../../assets/svg/HidePassword';
import AnimateAccordion from '../../animations/AnimateAccordion';
import {compose, when} from '../../helpers/stylecompose';

const PLACEHOLDER_TEXT_COLOR = '#9CA8BE';

const StyledTextInput = ({
  field,
  form,
  innerRef,
  title,
  isPassword,
  inputStyles,
  placeholderTextColor,
  containerStyles,
  ...rest
}) => {
  const [securePassword, setSecurePassword] = useState(false);
  const {name, onBlur, onChange, value} = field;
  const {errors, touched, setFieldTouched} = form;
  const hasError = errors[name] && touched[name];
  const error = errors[name];

  const handleChangeText = (text) => {
    onChange(name)(text);
  };

  const toggleVisibility = () => {
    setSecurePassword((prev) => !prev);
  };

  return (
    <View
      style={compose(
        when(title, styles.textInput__container),
        containerStyles,
      )}>
      {title ? (
        <StyledText style={styles.textInput__title}>{title}</StyledText>
      ) : null}

      <View
        style={[
          styles.textInput__wrap,
          when(hasError, [styles['textInput__wrap--error']]),
        ]}>
        <TextInput
          ref={innerRef}
          value={value}
          onChangeText={handleChangeText}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          placeholderTextColor={placeholderTextColor || PLACEHOLDER_TEXT_COLOR}
          secureTextEntry={isPassword && !securePassword}
          style={compose(styles.textInput, inputStyles)}
          {...rest}
        />

        {isPassword ? (
          <TouchableOpacity
            style={styles.textInput__wrapIcon}
            onPress={toggleVisibility}>
            {securePassword ? <HidePasswordSvg /> : <ShowPasswordSvg />}
          </TouchableOpacity>
        ) : null}
      </View>

      <AnimateAccordion state={hasError}>
        <StyledText style={styles.textInput__error}>{error}</StyledText>
      </AnimateAccordion>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput__container: {
    maxHeight: 96,
    padding: 4,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 4,
    backgroundColor: '#e8edf5',
  },

  textInput__title: {
    color: '#707E96',
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    letterSpacing: 0.6,
    marginBottom: 6,
  },

  textInput__wrap: {
    flexGrow: 1,
    flexShrink: 1,
    maxHeight: 40,
    fontFamily: 'Roboto-Medium',
    color: '#e8edf5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  'textInput__wrap--error': {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ED6347',
    borderRadius: 4,
  },

  textInput: {
    flexGrow: 1,
    flexShrink: 1,
    padding: 0,
    paddingLeft: 10,
    fontSize: 15,
  },

  textInput__wrapIcon: {
    padding: 12,
  },

  textInput__error: {
    color: '#ED6347',
    fontFamily: 'Roboto-Medium',
  },
});

export default StyledTextInput;
