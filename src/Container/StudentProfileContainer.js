import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Storage from '../lib/requests/storage';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {StudentProfileScreen} from '../Screen';
import {getProfileById} from '../actions/profile';

const StudentProfileContainer = props => {
  const [image] = useState('');
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

  useEffect(() => {
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
