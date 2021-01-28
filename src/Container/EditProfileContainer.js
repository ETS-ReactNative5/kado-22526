import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Storage from '../lib/requests/storage';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {EditProfileScreen} from '../Screen';

import {fetchProfile, updateProfile} from '../actions/profile';

const EditProfileContainer = props => {
  const dispatch = useDispatch();
  const [profileId, setprofileid] = useState('');
  const [data, setData] = useState('');
  const [update, setUpdate] = useState(false);
  const {profileDetail, isloading, updateLoading} = useSelector(
    store => store.profile,
  );

  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const navigate = routeName => {
    const {navigation} = props;
    navigation.navigate(routeName);
  };

  useEffect(() => {
    setDataFunc();
  }, [update]);

  const setDataFunc = async () => {
    let token = '';
    await Storage.retrieveData('access_token').then(item => {
      token = item?.profile_id;
      setprofileid(item?.profile_id);
      // console.log('itemssssssss', item?.profile_id);
    });
    // console.log('items key', token);
    dispatch(fetchProfile(token));
  };

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleUpdateProfile = () => {
    setUpdate(!update);
    dispatch(updateProfile(profileId, data));
  };

  return (
    <SafeAreaView style={styles.container}>
      <EditProfileScreen
        profileDetail={profileDetail}
        navigate={navigate}
        goBack={goBack}
        isloading={isloading}
        handleChange={handleChange}
        handleUpdateProfile={handleUpdateProfile}
        updateLoading={updateLoading}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default EditProfileContainer;
