import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {Input} from '../components';
import {
  buttonColor,
  lightBlackColor,
  themeColor,
  white,
  textBlackColor,
} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';
import {validateRegistration} from '../utils/validation/validateRegister';
import {ActivityIndicator} from 'react-native';
const SignUpScreen = ({
  showPassword,
  handlePassword,
  showConPassword,
  handleConPassword,
  submit,
  user_type,
  isloading,
}) => {
  return (
    <Formik
      initialValues={{email: '', password: '', confirmPassword: ''}}
      validate={validateRegistration}
      onSubmit={values => submit({...values, user_type})}>
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <View style={styles.formWrapper}>
          <View style={styles.inputWrapper}>
            <Input
              secureTextEntry={false}
              iconShow={false}
              placeholder="Email"
              name="email"
              onChange={value => {
                handleChange('email');
                setFieldValue('email', value);
              }}
              value={values.email}
            />
          </View>
          {errors.email && touched.email && (
            <View>
              <Text style={styles.errorText}>{errors.email}</Text>
            </View>
          )}
          <View style={styles.inputWrapper}>
            <Input
              secureTextEntry={showPassword}
              handlePassword={handlePassword}
              iconShow={true}
              showPasswordData={true}
              placeholder="Password"
              iconName={showPassword ? 'eye' : 'eye-slash'}
              onChange={value => setFieldValue('password', value)}
              value={values.password}
            />
          </View>
          {errors.password && touched.password && (
            <View>
              <Text style={styles.errorText}>{errors.password}</Text>
            </View>
          )}
          <View style={styles.inputWrapper}>
            <Input
              secureTextEntry={showConPassword}
              iconShow={true}
              placeholder="Confirm Password"
              iconName={showConPassword ? 'eye' : 'eye-slash'}
              showPasswordData={false}
              handleConPassword={handleConPassword}
              onChange={value => setFieldValue('confirmPassword', value)}
              value={values.confirmPassword}
            />
          </View>
          {errors.confirmPassword && touched.confirmPassword && (
            <View>
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            </View>
          )}

          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.registerBtnContainer}>
            {isloading ? (
              <ActivityIndicator color={white} />
            ) : (
              <Text style={styles.registerText}>Register</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = ScaledSheet.create({
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

  formWrapper: {
    padding: 20,
  },
  inputWrapper: {
    marginTop: 5,
  },
  errorText: {
    color: 'red',
  },
});

export default SignUpScreen;
