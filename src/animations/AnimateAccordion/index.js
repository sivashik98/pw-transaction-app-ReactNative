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

export default class AnimateAccordion extends React.PureComponent {
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
    const {speed} = this.props;
    const config = {
      type: 'easeOut',
      property: 'scaleY',
      duration: speed ? choicesSpeed[speed] : choicesSpeed['fast'],
    };

    LayoutAnimation.configureNext({
      duration: speed ? choicesSpeed[speed] : choicesSpeed['fast'],
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
