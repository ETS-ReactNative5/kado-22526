import React from 'react';
import Svg, {Path} from 'react-native-svg';

const MentorIcon = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20 17a2 2 0 002-2V4a2 2 0 00-2-2H9.46c.35.61.54 1.3.54 2h10v11h-9v2h9zM15 7v2H9v13H7v-6H5v6H3v-8H1.5V9a2 2 0 012-2H15zM8 4a2 2 0 11-4 0 2 2 0 014 0z"
        fill="#001CD6"
      />
    </Svg>
  );
};

export default MentorIcon;
