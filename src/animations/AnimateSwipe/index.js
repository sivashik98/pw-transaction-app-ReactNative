import React from 'react';
import {Animated, Easing} from 'react-native';

import {compose} from '../../helpers/stylecompose';

const choicesSpeed = {
  fast: 300,
  middle: 500,
  slow: 800,
};

export default class AnimateSwipe extends React.PureComponent {
  state = {
    sideValue: new Animated.Value(this.props.initialValue),
  };

  componentDidUpdate() {
    if (this.props.state) {
      this.handleSwipeIn();
    } else {
      this.handleSwipeOut();
    }
  }

  handleSwipeIn = () => {
    const {finalValue, speed} = this.props;

    Animated.timing(this.state.sideValue, {
      toValue: finalValue,
      duration: speed ? choicesSpeed[speed] : choicesSpeed['middle'],
      ease: Easing.ease(),
      useNativeDriver: true,
    }).start();
  };

  handleSwipeOut = () => {
    const {initialValue, speed} = this.props;

    Animated.timing(this.state.sideValue, {
      toValue: initialValue,
      duration: speed ? choicesSpeed[speed] : choicesSpeed['middle'],
      ease: Easing.ease(),
      useNativeDriver: true,
    }).start();
  };

  render() {
    const {sideValue} = this.state;
    const {children, style} = this.props;

    return (
      <Animated.View
        style={compose(
          {
            transform: [{translateX: sideValue}],
          },
          style,
        )}>
        {children}
      </Animated.View>
    );
  }
}
