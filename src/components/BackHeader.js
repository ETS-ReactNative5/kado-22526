import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScaledSheet} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {buttonColor, themeColor} from '../utils/Theme/Color';

import {BackArrow, MainLogo} from '../assets/Image';

const BackHeader = ({image, title, right, rightCloseIcon, openDrawer=false}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
          if (openDrawer) {
            navigation.openDrawer();
          }
        }}
        style={{padding: 10}}>
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
        {rightCloseIcon ? (
          <TouchableOpacity
            style={styles.closeIconContainer}
            onPress={() => navigation.goBack()}>
            <Icon size={20} name="times" color={buttonColor} />
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
  closeIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20@s',
    width: '20@s',
    borderColor: buttonColor,
  },
});

export default BackHeader;
