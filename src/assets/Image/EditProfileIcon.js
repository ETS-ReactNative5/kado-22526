import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
const EditProfileIcon = () => {
  return (
    <Svg
      width={44}
      height={44}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect width={44} height={44} rx={22} fill="#001CD6" />
      <Path
        d="M22 12a10 10 0 1010 10h-2a8 8 0 11-8-8v-2zm6.78 1a.69.69 0 00-.48.2l-1.22 1.21 2.5 2.5 1.22-1.21c.26-.26.26-.7 0-.95l-1.55-1.55c-.13-.13-.3-.2-.47-.2zm-2.41 2.12L19 22.5V25h2.5l7.37-7.38-2.5-2.5z"
        fill="#fff"
      />
    </Svg>
  );
};

export default EditProfileIcon;
