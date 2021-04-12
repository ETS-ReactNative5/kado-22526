import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {Input} from '../components';
import {
  buttonColor,
  lightBlackColor,
  white,
  textBlackColor,
} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';
import {validateResetEmail} from '../utils/validation/validateRegister';
import {ActivityIndicator} from 'react-native';

const ForgotPasswordForm = ({submit, isloading}) => {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validate={validateResetEmail}
      onSubmit={values => submit({...values})}>
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

          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.registerBtnContainer}>
            {isloading ? (
              <ActivityIndicator color={white} />
            ) : (
              <Text style={styles.registerText}>Reset</Text>
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

export default ForgotPasswordForm;
