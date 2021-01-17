import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import logo from '../assets/Image/logo.png';
import {Header, Input} from '../components';
import {
  buttonColor,
  lightBlackColor,
  themeColor,
  white,
} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';

const SignUpScreen = ({
  navigate,
  showPassword,
  handlePassword,
  showConPassword,
  handleConPassword,
}) => {
  return (
    <View style={styles.container}>
      <Header navigate={navigate} />

      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <View style={styles.imageContainer}>
          <Image source={logo} />
          <Text style={styles.text}>Remote freelance jobs for students</Text>
        </View>
        <View style={styles.body}>
          <Input
            secureTextEntry={false}
            iconShow={true}
            placeholder="User type"
            iconName="chevron-down"
          />
          <View style={{marginTop: 5}}>
            <Input
              secureTextEntry={false}
              iconShow={false}
              placeholder="Email"
            />
          </View>
          <View style={{marginTop: 5}}>
            <Input
              secureTextEntry={showPassword}
              handlePassword={handlePassword}
              iconShow={true}
              showPasswordData={true}
              placeholder="Password"
              iconName={showPassword ? 'eye' : 'eye-slash'}
            />
          </View>
          <View style={{marginTop: 5}}>
            <Input
              secureTextEntry={showConPassword}
              iconShow={true}
              placeholder="Password"
              iconName={showConPassword ? 'eye' : 'eye-slash'}
              showPasswordData={false}
              handleConPassword={handleConPassword}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigate('Login')}
            style={styles.registerBtnContainer}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.alreadyText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigate('Login')}>
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
    fontWeight: '700',
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
    marginTop: '30@s',
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
});

export default SignUpScreen;
