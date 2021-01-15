import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {buttonGrayBack} from '../utils/Theme/Color';

const FeedButton = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    padding: '7@s',
    backgroundColor: buttonGrayBack,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '40@s',
    marginLeft: '10@s',
    paddingRight: '15@s',
    paddingLeft: '15@s',
  },
});

export default FeedButton;
