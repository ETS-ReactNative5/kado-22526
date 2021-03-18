import React from 'react';

import {Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const ImageView = ({source, style}) => {
  const uri = source?.uri || 'https://kado-22526.s3.amazonaws.com/1.png';
  return <Image style={style ? style : styles.image} source={{uri}} />;
};

const styles = ScaledSheet.create({
  image: {
    height: '128@s',
    width: '128@s',
    borderRadius: 35,
    resizeMode: 'cover',
  },
});

export default ImageView;
