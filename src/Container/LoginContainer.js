import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {LoginScreen} from '../Screen';

const LoginContainer = props => {
  const [showPassword, setShowPasssword] = useState(true);
  const navigate = async routeName => {
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
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen
        handlePassword={handlePassword}
        showPassword={showPassword}
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

export default LoginContainer;
