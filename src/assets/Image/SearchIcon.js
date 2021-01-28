import React from 'react';
import {Svg, Path} from 'react-native-svg';
const SearchIcon = () => {
  return (
    <Svg
      width={20}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.975 11.925c.75-1.05 1.275-2.325 1.275-3.675 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6a5.91 5.91 0 003.675-1.275L14.7 15.75l1.05-1.05-2.775-2.775zm-4.725.825a4.513 4.513 0 01-4.5-4.5c0-2.475 2.025-4.5 4.5-4.5s4.5 2.025 4.5 4.5c0 .975-.3 1.875-.825 2.625-.3.375-.675.75-1.05 1.05-.75.525-1.65.825-2.625.825z"
        fill="#001CD6"
      />
    </Svg>
  );
};

export default SearchIcon;
