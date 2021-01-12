import React from 'react';
import {Modal, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

import {compose} from '../../helpers/stylecompose';
import StyledText from '../StyledText';
import StyledButton from '../StyledButton';

export const StyledModal = ({
  state,
  text,
  hasButton,
  isTransparent,
  onClose,
  children,
  style,
  ...rest
}) => {
  const handlePress = () => {
    onClose && onClose();
  };

  return (
    <Modal
      visible={!!state}
      transparent={isTransparent}
      animationType={'fade'}
      {...rest}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={compose(styles.styledModal, style)}>
          <View style={styles.styledModal__modal}>
            <StyledText style={styles.styledModal__text}>{text}</StyledText>

            {hasButton && (
              <StyledButton
                primary={true}
                text={'Закрыть'}
                onPress={handlePress}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  styledModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },

  styledModal__modal: {
    backgroundColor: '#e5e2e3',
    borderColor: '#dad7d8',
    width: '80%',
    justifyContent: 'space-between',
    minHeight: 135,
    borderRadius: 4,
    borderWidth: 2,
    padding: 25,
  },

  styledModal__text: {
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 18,
    color: '#450700',
  },
});

export default StyledModal;
