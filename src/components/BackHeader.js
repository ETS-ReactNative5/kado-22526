import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScaledSheet} from 'react-native-size-matters';
import {buttonColor, themeColor} from '../utils/Theme/Color';

import logo from '../assets/Image/logo.png';
import {BackArrow, MainLogo} from '../assets/Image';

const BackHeader = ({goBack, image, title, right}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={{padding: 10}}>
        <BackArrow />
        {/* <Icon name="arrow-left" color={buttonColor} size={18} /> */}
      </TouchableOpacity>
      <View>
        {image ? <MainLogo /> : <Text style={styles.text}>{title}</Text>}
      </View>

      <View style={{width: 35}}>
        {right ? (
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="plus" color={themeColor} />
          </TouchableOpacity>
        ) : null}
      </View>
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
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20@s',
    width: '20@s',
    borderRadius: '100@s',
    borderWidth: 2,
    borderColor: buttonColor,
  },
});

export default BackHeader;
