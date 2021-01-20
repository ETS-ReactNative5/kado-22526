import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { LoginScreen } from '../Screen';
import { login } from '../actions/auth'
const LoginContainer = props => {
  const [showPassword, setShowPasssword] = useState(true);
  const [loginForm, setLogInForm] = useState({})
  const dispatch = useDispatch();
  const navigate = async routeName => {
    const { navigation } = props;
    if (routeName === 'drawer') {
      navigation.openDrawer();
    } else {
      await navigation.navigate(routeName);
    }
  };
  const handlePassword = () => {
    setShowPasssword(!showPassword);
  };
  const handleChange = (name, value) => {
    setLogInForm({
      ...loginForm,
      [name]: value
    })
  }
  const handleSubmit = () => {

    dispatch(login(loginForm, navigate))
    // console.log("form data", params)
  }
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen
        handlePassword={handlePassword}
        showPassword={showPassword}
        navigate={navigate}
        handleChange={handleChange} handleSubmit={handleSubmit}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginContainer;
