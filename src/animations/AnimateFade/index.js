import React from 'react';
import {Animated, Easing} from 'react-native';

import {compose} from '../../helpers/stylecompose';

const choicesSpeed = {
  fast: 250,
  middle: 400,
  slow: 700,
};

export default class AnimateFade extends React.PureComponent {
  state = {
    fadeValue: new Animated.Value(0),
  };

  componentDidUpdate() {
    if (this.props.state) {
      this.handleFadeShow();
    } else {
      this.handleFadeHide();
    }
  }

  handleFadeShow = () => {
    const {speed} = this.props;

    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: speed ? choicesSpeed[speed] : choicesSpeed['middle'],
      ease: Easing.ease(),
      useNativeDriver: true,
    }).start();
  };

  handleFadeHide = () => {
    const {speed} = this.props;

    Animated.timing(this.state.fadeValue, {
      toValue: 0,
      duration: speed ? choicesSpeed[speed] : choicesSpeed['middle'],
      ease: Easing.ease(),
      useNativeDriver: true,
    }).start();
  };

  render() {
    const {fadeValue} = this.state;
    const {state, children, style} = this.props;

    return (
      <Animated.View
        style={compose(
          {
            height: state ? 'auto' : 0,
            opacity: fadeValue,
            transform: [
              {
                scale: fadeValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.7, 1],
                }),
              },
            ],
          },
          style,
        )}>
        {children}
      </Animated.View>
    );
  }
}
