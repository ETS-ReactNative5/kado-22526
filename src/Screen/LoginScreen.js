import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import logo from '../Assets/Image/logo.png';
import {Header, Input} from '../Components';
import {
  buttonColor,
  lightBlackColor,
  themeColor,
  white,
} from '../Utils/Theme/Color';

const LoginScreen = ({navigate, handlePassword, showPassword}) => {
  return (
    <View style={styles.container}>
      <Header navigate={navigate} />
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <View>{/* <Image source={logo} /> */}</View>
        <View style={styles.body}>
          <View style={styles.imageContainer}>
            <Image source={logo} />
          </View>
          <Input secureTextEntry={false} iconShow={false} placeholder="Email" />
          <Input
            secureTextEntry={showPassword}
            iconShow={true}
            iconName={showPassword ? 'eye' : 'eye-slash'}
            placeholder="Password"
            showPasswordData={true}
            handlePassword={handlePassword}
          />

          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot password</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigate('EditProfile')}
            style={styles.registerBtnContainer}>
            <Text style={styles.registerText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.alreadyText}>Don’t have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.loginText}>Register</Text>
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
    marginBottom: '10@s',
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
});

export default LoginScreen;
