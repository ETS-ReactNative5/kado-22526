import React from 'react';

import Svg, {Path} from 'react-native-svg';

const PaymentsIcon = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20 18H4V6h16v12zm0-14H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-9 13h2v-1h1a1 1 0 001-1v-3a1 1 0 00-1-1h-3v-1h4V8h-2V7h-2v1h-1a1 1 0 00-1 1v3a1 1 0 001 1h3v1H9v2h2v1z"
        fill="#001CD6"
      />
    </Svg>
  );
};

export default PaymentsIcon;
