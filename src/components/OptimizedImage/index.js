import React from 'react';
import FastImage from 'react-native-fast-image';
import {compose} from '../../helpers/stylecompose';

const OptimizedImage = ({
  resizeMode,
  source,
  onLoadStart,
  onLoadEnd,
  styles,
}) => {
  return (
    <FastImage
      source={{
        uri: source,
        priority: FastImage.priority.high,
        // cache: FastImage.cacheControl.cacheOnly,
      }}
      resizeMode={FastImage.resizeMode[resizeMode]}
      onLoadStart={onLoadStart}
      onLoadEnd={onLoadEnd}
      style={compose(styles)}
    />
  );
};

export default OptimizedImage;
