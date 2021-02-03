import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {LoginScreen} from '../Screen';
import {login} from '../actions/auth';
const LoginContainer = props => {
  const [showPassword, setShowPasssword] = useState(true);
  const [loginForm, setLogInForm] = useState({});
  const dispatch = useDispatch();
  const isloading = useSelector(state => state.auth.isLoading);

  const navigate = async routeName => {
    const {navigation} = props;
    if (routeName === 'drawer') {
      navigation.openDrawer();
    } else {
      await navigation.navigate(routeName);
    }
  };

  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };
  const handlePassword = () => {
    setShowPasssword(!showPassword);
  };
  const handleChange = (name, value) => {
    setLogInForm({
      ...loginForm,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    dispatch(login(loginForm, navigate));
  };
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen
        handlePassword={handlePassword}
        showPassword={showPassword}
        navigate={navigate}
        goBack={goBack}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isloading={isloading}
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
