import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Storage from '../lib/requests/storage';
import ImagePicker from 'react-native-image-picker';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {EditProfileScreen} from '../Screen';

import {fetchProfile, updateProfile, updatePhoto} from '../actions/profile';

const EditProfileContainer = props => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [image, setImage] = useState('');
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

  useEffect(() => {
    dispatch(fetchProfile(profileId));
  }, [count]);

  const setDataFunc = async () => {
    let token = '';
    await Storage.retrieveData('access_token').then(item => {
      token = item?.profile_id;
      setprofileid(item?.profile_id);
    });
    dispatch(fetchProfile(token));
  };

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const uploadImage = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('response', response.path);
        const file = {
          uri: response.uri,
          name: response.fileName,
          type: 'image/png',
        };

        setImage(file);
        const fd = new FormData();

        fd.append('photo_file', file);

        dispatch(updatePhoto(profileId, fd));
        setCount(count + 1);
      }
    });
  };

  const handleUpdateProfile = () => {
    setUpdate(!update);

    dispatch(updateProfile(profileId, data, navigate));
  };

  return (
    <SafeAreaView style={styles.container}>
      {console.log('imageee', image)}
      <EditProfileScreen
        profileDetail={profileDetail}
        navigate={navigate}
        goBack={goBack}
        isloading={isloading}
        handleChange={handleChange}
        handleUpdateProfile={handleUpdateProfile}
        updateLoading={updateLoading}
        uploadImage={uploadImage}
        image={image}
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
