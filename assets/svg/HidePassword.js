import React from 'react';
import Svg, {Path} from 'react-native-svg';

function HidePassword(props) {
  return (
    <Svg width={20} height={14} viewBox="0 0 20 14" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.832 10.418C1.212 8.873 0 6.75 0 6.75S3 1.5 9.75 1.5c.978 0 1.878.11 2.701.299l-2.027 2.027a3 3 0 00-3.598 3.598l-2.994 2.995zm3.217 1.283c.823.189 1.723.299 2.701.299 6.75 0 9.75-5.25 9.75-5.25s-1.213-2.123-3.832-3.668l-2.994 2.994a3 3 0 01-3.598 3.598l-2.027 2.027zM12 6.75c0 .576-.22 1.152-.659 1.591-.44.44-1.015.659-1.591.659L12 6.75zM9.75 4.5c-.576 0-1.152.22-1.591.659A2.243 2.243 0 007.5 6.75L9.75 4.5zm6-4.5L3 12.75l.75.75L16.5.75 15.75 0z"
        fill="#4B5E80"
      />
    </Svg>
  );
}

export default HidePassword;
