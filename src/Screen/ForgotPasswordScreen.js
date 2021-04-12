import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import MainLogo from '../assets/Image/MainLogo';
import {
  buttonColor,
  lightBlackColor,
  themeColor,
  white,
  textBlackColor,
} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';
import {BackArrow} from '../assets/Image';
import {useNavigation} from '@react-navigation/native';
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPasswordScreen = ({navigate, handleSubmit, isloading}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={styles.goBackButon}>
        <BackArrow />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <View style={styles.imageContainer}>
          <MainLogo />
          <Text style={styles.text}>Remote freelance jobs for students</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.tabContainer}>
            <ForgotPasswordForm submit={handleSubmit} isloading={isloading} />
          </View>
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
    paddingBottom: '20@s',
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
    flex: 1,

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
  tabContainer: {
    flex: 1,
    marginTop: '20@s',
  },
  activeTabStyle: {
    color: textBlackColor,
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 18,
  },
  tabTextStyle: {
    color: '#8E8E8E',
  },
  goBackButon: {
    padding: 20,
  },
});

export default ForgotPasswordScreen;
