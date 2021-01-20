import React from 'react';
import Svg, {Path} from 'react-native-svg';
const DeleteIcon = () => {
  return (
    <Svg
      width={14}
      height={18}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1 16a2 2 0 002 2h8a2 2 0 002-2V4H1v12zM3 6h8v10H3V6zm7.5-5l-1-1h-5l-1 1H0v2h14V1h-3.5z"
        fill="#001CD6"
      />
    </Svg>
  );
};

export default DeleteIcon;
