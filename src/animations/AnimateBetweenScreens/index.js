import React from 'react';
import {View, Platform, UIManager, LayoutAnimation} from 'react-native';

import {compose} from '../../helpers/stylecompose';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const choicesSpeed = {
  fast: 300,
  middle: 600,
  slow: 900,
};

const choicesDamping = {
  fast: 0.4,
  middle: 0.6,
  slow: 0.8,
};

export default class AnimateBetweenScreens extends React.PureComponent {
  state = {
    expanded: this.props.state,
  };

  componentDidUpdate(prevProps) {
    const {state} = this.props;

    if (!!state !== !!prevProps.state) {
      this.handleAnimate();
    }
  }

  handleAnimate = () => {
    const {speed, damping} = this.props;
    const config = {
      type: 'spring',
      property: 'opacity',
      springDamping: damping ? choicesDamping[damping] : choicesDamping['slow'],
      duration: speed ? choicesSpeed[speed] : choicesSpeed['middle'],
    };

    LayoutAnimation.configureNext({
      duration: speed ? choicesSpeed[speed] : choicesSpeed['middle'],
      create: config,
      update: config,
      delete: config,
    });
    this.setState((state) => ({expanded: !state.expanded}));
  };

  render() {
    const {expanded} = this.state;
    const {children, style} = this.props;

    return (
      <View
        style={compose(
          {
            height: expanded ? 'auto' : 0,
            opacity: expanded ? 1 : 0,
          },
          style,
        )}>
        {children}
      </View>
    );
  }
}
