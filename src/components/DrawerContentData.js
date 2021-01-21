import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { themeColor, white } from '../utils/Theme/Color';
import { ScaledSheet } from 'react-native-size-matters';
import userIcon from '../assets/Image/userIcon.png';
import aboutIcon from '../assets/Image/aboutIcon.png';

import whiteLogo from '../assets/Image/whiteLogo.png';

const Drawer = ({ navigation, progress, ...rest }) => {
  // console.log('progress', progress);

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  return (
    <DrawerContentScrollView
      scrollEnabled={false}
      contentContainerStyle={{ flex: 1, backgroundColor: themeColor }}
      {...rest}>
      <Animated.View style={styles.container}>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => navigation.navigate('Message')}>
            <Image source={whiteLogo} />
          </TouchableOpacity>
          <Text style={styles.descText}>
            Find work, build resume, gain industry experience, and foster
            professional relationships
          </Text>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('AboutUs')}>
              {/* <Icon color={white} size={17} name="info-circle" /> */}
              <Image source={aboutIcon} />
              <Text style={styles.btnText}>About us</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('EditProfile')}>
              <Image source={userIcon} />
              {/* <Icon color={white} size={17} name="user-alt" /> */}
              <Text style={styles.btnText}>Profile</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Message')}>
              <Image source={userIcon} />
              <Text style={styles.btnText}>Message</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Explore')}>
              <Image source={userIcon} />
              {/* <Icon color={white} size={17} name="user-alt" /> */}
              <Text style={styles.btnText}>Explore</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </DrawerContentScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingLeft: '20@s',
  },
  body: {
    flex: 1,
    marginTop: '50@s',
  },
  descText: {
    color: white,
    fontSize: '14@s',
    lineHeight: '21@s',
    marginTop: '20@s',
  },
  btn: {
    backgroundColor: '#04135F',
    padding: '10@s',
    borderRadius: '8@s',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10@s',
  },
  btnText: {
    marginLeft: '10@s',
    fontSize: '17@s',
    lineHeight: '20@s',
    color: white,
  },
});

export default Drawer;