import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Storage from '../lib/requests/storage';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {StudentProfileScreen} from '../Screen';
import {
  getProfileById,
  updateProfile,
  updateProfileById,
} from '../actions/profile';

const StudentProfileContainer = props => {
  const [image] = useState('');
  const [user_group, setUser_group] = useState('');
  const [available, setAvailable] = useState(false);
  const dispatch = useDispatch();
  const {profileData, isloading} = useSelector(store => store.profile);
  const {
    navigation,
    route: {params},
  } = props;
  const goBack = () => {
    navigation.goBack();
  };

  const navigate = async routeName => {
    await navigation.navigate(routeName);
  };

  const updateProfileStatus = () => {
    if (user_group !== 'company') return;
    dispatch(
      updateProfileById(profileData?.id, {
        status: !profileData?.status,
      }),
    );
    setAvailable(!available);
  };

  useEffect(() => {
    if (available !== profileData?.status) {
      setAvailable(profileData?.status);
    }
  }, [profileData]);

  useEffect(() => {
    Storage.retrieveData('access_token').then(item => {
      item?.user_groups.map(item => {
        setUser_group(item);
      });
    });
    if (params) {
      dispatch(getProfileById(params?.id));
    } else {
      setDataFunc();
    }
  }, []);

  const setDataFunc = async () => {
    let token = '';
    await Storage.retrieveData('access_token').then(item => {
      token = item?.profile_id;
      console.warn(item);
      item?.user_groups.map(item => {
        setUser_group(item);
      });
    });
    dispatch(getProfileById(token));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StudentProfileScreen
        profileData={profileData}
        navigate={navigate}
        goBack={goBack}
        isloading={isloading}
        image={image}
        navigation={navigation}
        updateProfileStatus={updateProfileStatus}
        available={available}
        user_group={user_group}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default StudentProfileContainer;
