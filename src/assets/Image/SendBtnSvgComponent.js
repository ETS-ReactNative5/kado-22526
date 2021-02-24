import * as React from 'react';
import {Platform} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {buttonColor} from '../../utils/Theme/Color';

function SendBtnSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={Platform.OS === 'ios' ? 46.667 : 50}
      height={Platform.OS === 'ios' ? 34.667 : 44}
      fill={buttonColor}
      viewBox="0 0 50 50"
      {...props}>
      <Path d="M1.2 1.2c-1.7 1.7-1.7 45.9 0 47.6 1.7 1.7 45.9 1.7 47.6 0 1.7-1.7 1.7-45.9 0-47.6C47.1-.5 2.9-.5 1.2 1.2zm27.6 20.6c3.4 1.4 6.2 2.8 6.2 3.2 0 .3-4.4 2.4-9.7 4.7l-9.8 4.1-.3-3c-.2-1.6-.1-3.2.2-3.5.3-.3 2.8-.8 5.6-1.1 5.1-.5 6-2.2 1.2-2.2-5.7 0-7.2-1-7.2-4.6V16l3.8 1.6c2 .8 6.5 2.7 10 4.2z" />
    </Svg>
  );
}

export default SendBtnSvgComponent;
