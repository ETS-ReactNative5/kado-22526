import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Storage from '../lib/requests/storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import {themeColor, white} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';
import aboutIcon from '../assets/Image/aboutIcon.png';

import whiteLogo from '../assets/Image/whiteLogo.png';
import {PostRideIcon, WhiteSearchIcon} from '../assets/Image';

const Drawer = ({navigation, progress, ...rest}) => {
  const [user_group, setUser_group] = useState('');
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  useEffect(() => {
    Storage.retrieveData('access_token').then(items => {
      items?.user_groups.map(item => {
        setUser_group(item);
      });
    });
  }, []);
  return (
    <DrawerContentScrollView
      scrollEnabled={false}
      contentContainerStyle={{flex: 1, backgroundColor: themeColor}}
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
          <View style={{marginTop: 20}}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('AboutUs')}>
              <Image source={aboutIcon} />
              <Text style={styles.btnText}>About us</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('HowWork')}>
              <WhiteSearchIcon />
              <Text style={styles.btnText}>How it works</Text>
            </TouchableOpacity>

            {user_group === 'company' ? (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('PostRole')}>
                <PostRideIcon />
                <Text style={styles.btnText}>Post a role</Text>
              </TouchableOpacity>
            ) : null}

            {user_group === 'company' ? (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('EditCompanyProfile')}>
                <Icon color={white} size={20} name="user-circle" />
                <Text style={styles.btnText}>Edit Profile</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('EditProfile')}>
                <Icon color={white} size={20} name="user-circle" />
                <Text style={styles.btnText}>Edit Profile</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Explore')}>
              <Icon color={white} size={20} name="compass" />
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
    backgroundColor: '#001CD6',
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
