import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Clean(props) {
  return (
    <Svg
      width={22}
      height={23}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.91 22.272c6.025 0 10.91-4.885 10.91-10.91S16.934.452 10.91.452C4.884.452 0 5.337 0 11.362s4.884 10.91 10.91 10.91z"
        fill="#CBCBCB"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.172 6.972l4.242 4.243-4.242 4.242 1.414 1.415 4.242-4.243 4.243 4.243 1.414-1.415-4.242-4.242 4.242-4.243-1.414-1.414L10.828 9.8 6.586 5.558 5.172 6.972z"
        fill="#585858"
      />
    </Svg>
  );
}

export default Clean;
