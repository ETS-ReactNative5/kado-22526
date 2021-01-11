import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import uset from '../Assets/Image/usert.png';
import {BackHeader, Header, Input} from '../Components';
import {
  buttonColor,
  lightBlackColor,
  themeColor,
  white,
} from '../Utils/Theme/Color';

const EditProfileScreen = ({goBack, navigate}) => {
  return (
    <View style={styles.container}>
      <BackHeader goBack={goBack} />
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <View style={styles.body}>
          <View style={styles.imageContainer}>
            <Image resizeMode="cover" style={styles.image} source={uset} />
          </View>
          <Input
            secureTextEntry={false}
            iconShow={false}
            placeholder="Full Name"
          />
          <Input
            secureTextEntry={true}
            iconShow={true}
            placeholder="Location"
            iconName="map-marker-alt"
          />

          <Input secureTextEntry={true} iconShow={false} placeholder="Phone" />
          <Input
            secureTextEntry={true}
            iconShow={true}
            iconName="chevron-down"
            placeholder="Gender"
          />

          <Input
            secureTextEntry={true}
            iconShow={true}
            iconName="calendar-week"
            placeholder="Date of birth"
          />

          <TouchableOpacity
            onPress={() => navigate('AboutUs')}
            style={styles.registerBtnContainer}>
            <Text style={styles.registerText}>Save</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.alreadyText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  bodyContainer: {
    flex: 1,
    padding: '1@s',
    paddingBottom: '20@s',
    justifyContent: 'space-between',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50@s',
  },
  text: {
    fontSize: '17@s',
    lineHeight: '20@s',
    color: themeColor,
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: '10@s',
  },
  body: {
    padding: '10@s',
    paddingLeft: '15@s',
    paddingRight: '15@s',
    justifyContent: 'center',
  },
  registerBtnContainer: {
    padding: '10@s',
    backgroundColor: buttonColor,
    marginTop: '20@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: white,
    fontSize: '14@s',
    lineHeight: '18@s',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: buttonColor,
    fontSize: '14@s',
    lineHeight: '18@s',
    marginLeft: '5@s',
  },
  alreadyText: {
    color: lightBlackColor,
    fontSize: '14@s',
    lineHeight: '18@s',
  },
  forgotPasswordContainer: {
    marginTop: '10@s',
    alignItems: 'flex-end',
  },

  forgotPasswordText: {
    color: buttonColor,
    fontSize: '12@s',
    lineHeight: '14@s',
    fontWeight: 'bold',
  },

  image: {
    height: '128@s',
    width: '128@s',
    borderRadius: 50,
    resizeMode: 'cover',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditProfileScreen;
