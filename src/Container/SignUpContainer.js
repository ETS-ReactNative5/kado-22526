import React from 'react';
import {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {SignUpScreen} from '../Screen';

const SignUpContainer = (props) => {
  const [showPassword, setShowPasssword] = useState(true);
  const [showConPassword, setShowConPasssword] = useState(true);
  const navigate = async (routeName) => {
    const {navigation} = props;
    if (routeName === 'drawer') {
      navigation.openDrawer();
    } else {
      await navigation.navigate(routeName);
    }
  };

  const handlePassword = () => {
    setShowPasssword(!showPassword);
  };

  const handleConPassword = () => {
    setShowConPasssword(!showConPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SignUpScreen
        showPassword={showPassword}
        showConPassword={showConPassword}
        handlePassword={handlePassword}
        handleConPassword={handleConPassword}
        navigate={navigate}
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
