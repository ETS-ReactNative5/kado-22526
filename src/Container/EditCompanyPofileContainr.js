import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Storage from '../lib/requests/storage';
import {ScaledSheet} from 'react-native-size-matters';
import {EditCompanyPofileScreen} from '../Screen';
import {useDispatch, useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import {buttonColor} from '../utils/Theme/Color';

import {fetchProfile, updateProfile, updatePhoto} from '../actions/profile';

const EditCompanyPofileContainr = props => {
  const dispatch = useDispatch();
  const [image, setImage] = useState('');
  const [count, setCount] = useState(0);
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
  const refRBSheet = useRef();

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
        setUpdate(!update);
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
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            height: 150,
          },
        }}>
        <View>
          <TouchableOpacity
            onPress={() => {
              uploadImage(), refRBSheet.current.close();
            }}
            style={styles.btnContainer}>
            <Text style={styles.uploadBtnText}>Upload Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => refRBSheet.current.close()}
            style={styles.btnContainer}>
            <Text style={styles.uploadBtnText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <StatusBar
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.4)"
        />
      </RBSheet>
      <EditCompanyPofileScreen
        profileDetail={profileDetail}
        goBack={goBack}
        handleUpdateProfile={handleUpdateProfile}
        updateLoading={updateLoading}
        refRBSheet={refRBSheet}
        handleChange={handleChange}
        isloading={isloading}
        image={image}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15@s',
  },
  uploadBtnText: {
    color: buttonColor,
    fontSize: '15@s',
    lineHeight: '18@s',
    fontWeight: 'bold',
  },
});

export default EditCompanyPofileContainr;
