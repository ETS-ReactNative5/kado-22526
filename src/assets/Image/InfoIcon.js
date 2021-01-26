import React from 'react';
import {Svg, Path, Rect} from 'react-native-svg';

const InfoIcon = () => {
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15.333 19.333h1.334v-4h-1.334v4zm.667-10A6.67 6.67 0 009.333 16 6.67 6.67 0 0016 22.667 6.67 6.67 0 0022.667 16 6.67 6.67 0 0016 9.333zm0 12A5.34 5.34 0 0110.667 16 5.34 5.34 0 0116 10.667 5.34 5.34 0 0121.333 16 5.34 5.34 0 0116 21.333zM15.333 14h1.334v-1.333h-1.334V14z"
        fill="#001CD6"
      />
      <Rect x={0.5} y={0.5} width={31} height={31} rx={15.5} stroke="#E1E4F6" />
    </Svg>
  );
};

export default InfoIcon;
