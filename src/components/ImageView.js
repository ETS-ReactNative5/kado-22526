import React from 'react';

import {Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const ImageView = ({source, style}) => {
  const imageURI = source !== null ? source : '';
  if (!imageURI.uri === null) return null;
  return (
    <Image
      style={style ? style : styles.image}
      source={imageURI ? imageURI : ''}
    />
  );
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
