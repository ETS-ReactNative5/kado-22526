import ImagePicker from 'react-native-image-picker';
import {PermissionsAndroid, Platform} from 'react-native';
import Api from '../lib/requests/api';

const requestCameraPermission = async () => {
  if (Platform.OS === 'ios') return true;
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Photo App Camera Permission',
        message: 'Please grant the app permission to access photos. ',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
      return true;
    } else {
      console.log('Camera permission denied');
      return false;
    }
  } catch (err) {
    return false;
  }
};
export const uploadImagePicker = async callBackFn => {
  const canUpload = await requestCameraPermission();
  if (!canUpload) return;
  const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  return ImagePicker.showImagePicker(options, async response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
      return false;
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
      return false;
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      return false;
    } else {
      console.log('response', response.path);
      // upload image
      const formData = new FormData();

      formData.append('file', response);
      Api.post('api/v1/media/', formData)
        .then(res => {})
        .catch(err => console.warn(err));
      if (callBackFn) {
        callBackFn(response);
      }
      return response;
    }
  });
};

export const getPlaceholder = (value, placeholder) => {
  if (!value) {
    return placeholder;
  }
  return value.toString() || placeholder;
};
