import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {
  buttonColor,
  buttonGrayBack,
  skillBackColor,
} from '../utils/Theme/Color';

const FeedButton = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    padding: '7@s',
    backgroundColor: skillBackColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '40@s',
    marginLeft: '10@s',
    paddingRight: '15@s',
    paddingLeft: '15@s',
  },
  text: {
    color: buttonColor,
    fontWeight: 'bold',
  },
});

export default FeedButton;
