import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Storage from '../lib/requests/storage';
import {useDispatch, useSelector} from 'react-redux';
import {ScaledSheet} from 'react-native-size-matters';
import {DeleteAccountScreen} from '../Screen';
import AboutUsScreen from '../Screen/AboutUsScreen';
import {fetchProfile, userDelete} from '../actions/profile';

const DeleteAccountContainer = props => {
  const dispatch = useDispatch();
  const [profileId, setprofileid] = useState('');
  const {profileDetail, isloading} = useSelector(state => state.profile);

  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const navigate = routeName => {
    const {navigation} = props;
    navigation.navigate(routeName);
  };

  useEffect(() => {
    console.log('salman');
    setDataFunc();
  }, []);

  const setDataFunc = async () => {
    let token = '';
    await Storage.retrieveData('access_token').then(item => {
      token = item?.profile_id;
      setprofileid(item?.user);
    });
    dispatch(fetchProfile(token));
  };

  const handleSubmit = () => {
    navigate('Login');
    dispatch(userDelete(profileId, navigate));
  };

  return (
    <SafeAreaView style={styles.container}>
      <DeleteAccountScreen
        handleSubmit={handleSubmit}
        goBack={goBack}
        profileDetail={profileDetail}
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

export default DeleteAccountContainer;
