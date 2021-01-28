import React from 'react';
import {Svg, Path} from 'react-native-svg';
const BackArrow = () => {
  return (
    <Svg
      width={20}
      height={14}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20 6H3.8l4.6-4.6L7 0 0 7l7 7 1.4-1.4L3.8 8H20V6z"
        fill="#001CD6"
      />
    </Svg>
  );
};

export default BackArrow;
