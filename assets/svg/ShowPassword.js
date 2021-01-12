import React from 'react';
import Svg, {Path} from 'react-native-svg';

function ShowPassword(props) {
  return (
    <Svg width={20} height={11} viewBox="0 0 20 11" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.75 0C3 0 0 5.25 0 5.25s3 5.25 9.75 5.25 9.75-5.25 9.75-5.25S16.5 0 9.75 0zm0 8.25a3 3 0 100-6 3 3 0 000 6zm0-.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm0-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
        fill="#4B5E80"
      />
    </Svg>
  );
}

export default ShowPassword;
