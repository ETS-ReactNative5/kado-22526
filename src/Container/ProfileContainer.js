import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Storage from '../lib/requests/storage';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {ProfileScreen} from '../Screen';
import {getUser} from '../actions/auth';
import {getProfileById, updateProfileById} from '../actions/profile';
const ProfileContainer = props => {
  // const [loginForm, setLogInForm] = useState({})
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  const {profileData, isloading, updateLoading} = useSelector(
    store => store.profile,
  );

  const [profileId, setprofileid] = useState('');
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
    setDataFunc();
  }, []);

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const setDataFunc = async () => {
    let token = '';
    await Storage.retrieveData('access_token').then(item => {
      token = item?.profile_id;
      setprofileid(item?.profile_id);
    });
    dispatch(getProfileById(token));
  };

  const handleSubmit = () => {
    dispatch(updateProfileById(profileId, data, navigate));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProfileScreen
        profileData={profileData}
        navigate={navigate}
        goBack={goBack}
        isloading={isloading}
        updateLoading={updateLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileContainer;
