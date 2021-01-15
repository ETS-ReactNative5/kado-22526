import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScaledSheet} from 'react-native-size-matters';
import {themeColor} from '../utils/Theme/Color';

import logo from '../assets/Image/logo.png';

const BackHeader = ({goBack, image, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={{padding: 10}}>
        <Icon name="arrow-left" color={themeColor} size={18} />
      </TouchableOpacity>
      <View>
        {image ? (
          <Image source={logo} />
        ) : (
          <Text style={styles.text}>{title}</Text>
        )}
      </View>

      <View style={{width: 35}} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10@s',
  },
  text: {
    fontSize: '16@s',
    lineHeight: '24@s',
    marginTop: '4@s',
  },
});

export default BackHeader;
