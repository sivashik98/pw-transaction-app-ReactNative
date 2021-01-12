import React from 'react';
import {Animated} from 'react-native';

import {compose} from '../../helpers/stylecompose';

const choicesSpeed = {
  fast: 300,
  middle: 500,
  slow: 800,
};

export default class AnimateRotate extends React.PureComponent {
  state = {
    rotateValue: new Animated.Value(this.props.deg),
  };

  componentDidUpdate(prevProps) {
    const {deg, speed} = this.props;

    if (deg !== prevProps.deg) {
      this.handleAnimate(deg, speed);
    }
  }

  handleAnimate = (deg, speed) => {
    Animated.timing(this.state.rotateValue, {
      toValue: deg,
      duration: speed ? choicesSpeed[speed] : choicesSpeed['fast'],
      useNativeDriver: true,
    }).start();
  };

  render() {
    const {rotateValue} = this.state;
    const {range, children, style} = this.props;

    const rotateInterpolate = rotateValue.interpolate({
      inputRange: range,
      outputRange: [`${range[0]}deg`, `${range[1]}deg`],
    });

    return (
      <Animated.View
        style={compose({transform: [{rotate: rotateInterpolate}]}, style)}>
        {children}
      </Animated.View>
    );
  }
}
