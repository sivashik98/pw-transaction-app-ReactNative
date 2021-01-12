import React from 'react';
import Svg, {Path} from 'react-native-svg';

function Validation(props) {
  return (
    <Svg width={13} height={9} viewBox="0 0 13 9" fill="none" {...props}>
      <Path
        d="M3.933 7.1L.999 4.303 0 5.248 3.933 9 12.375.946 11.383 0l-7.45 7.1z"
        fill="#6EBD2F"
      />
    </Svg>
  );
}

export default Validation;
