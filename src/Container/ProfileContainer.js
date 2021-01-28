import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {ProfileScreen} from '../Screen';
import {getUser} from '../actions/auth';
const ProfileContainer = props => {
  // const [loginForm, setLogInForm] = useState({})
  const dispatch = useDispatch();
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const navigate = async routeName => {
    const {navigation} = props;
    await navigation.navigate(routeName);
  };

  useEffect(() => {
    dispatch(getUser());
  });

  return (
    <SafeAreaView style={styles.container}>
      <ProfileScreen navigate={navigate} goBack={goBack} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileContainer;
