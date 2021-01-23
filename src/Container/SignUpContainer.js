import React from 'react';
import {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {SignUpScreen} from '../Screen';
import {signUp} from '../actions/auth';

const SignUpContainer = props => {
  const [showPassword, setShowPasssword] = useState(true);
  const [showConPassword, setShowConPasssword] = useState(true);
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
  const handleSubmit = signUpData => {
    dispatch(signUp(signUpData, navigate));
    // console.log("form data", params)
  };
  return (
    <SafeAreaView style={styles.container}>
      <SignUpScreen
        showPassword={showPassword}
        showConPassword={showConPassword}
        handlePassword={handlePassword}
        handleConPassword={handleConPassword}
        navigate={navigate}
        handleSubmit={handleSubmit}
        goBack={goBack}
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
