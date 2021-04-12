import React, {useRef} from 'react';
import {useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {SignUpScreen} from '../Screen';
import {signUp} from '../actions/auth';
import {Toast} from '../components/Toast';

const SignUpContainer = props => {
  const [showPassword, setShowPasssword] = useState(true);
  const [showConPassword, setShowConPasssword] = useState(true);
  const isLoading = useSelector(state => state.auth.isLoading);
  const toastRef = useRef();
  const dispatch = useDispatch();
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

  const handleConPassword = () => {
    setShowConPasssword(!showConPassword);
  };
  const signUpCallback = () => {
    toastRef.current.show('Signup successful.', '#fff', 1000);
    setTimeout(() => {
      navigate('Home');
    }, 2000);
  };
  const handleSubmit = signUpData => {
    dispatch(signUp(signUpData, signUpCallback));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Toast ref={toastRef} />
      <SignUpScreen
        showPassword={showPassword}
        showConPassword={showConPassword}
        handlePassword={handlePassword}
        handleConPassword={handleConPassword}
        navigate={navigate}
        handleSubmit={handleSubmit}
        goBack={goBack}
        isloading={isLoading}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default SignUpContainer;
