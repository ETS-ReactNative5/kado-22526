import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Storage from '../lib/requests/storage';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {ProfileScreen} from '../Screen';
import ImagePicker from 'react-native-image-picker';
import {
  getProfileById,
  updateProfileById,
  updatePhoto,
} from '../actions/profile';
import {JOBS_ENUM} from '../constants/jobs';
const ProfileContainer = props => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const {profileData, isloading, updateLoading} = useSelector(
    store => store.profile,
  );

  const [profileId, setprofileid] = useState('');
  const [workTypes] = useState(JOBS_ENUM.work_types);
  const [selectedWorkTypes, setSelectedWorkTypes] = useState(
    profileData?.work_types || [],
  );

  const [selectedAvailability, setSelectedAvailability] = useState(
    profileData?.availability || '',
  );
  const [selectedTimePerWeek, setSelectedTimePerWeek] = useState(
    profileData?.time_per_week || '',
  );

  const handleSelectTimePerWeek = value => {
    if (selectedTimePerWeek === value) {
      setSelectedTimePerWeek('');
    } else {
      setSelectedTimePerWeek(value);
    }
    handleChange('time_per_week', value);
  };

  const handleSelectAvailability = availability => {
    if (selectedAvailability === availability) {
      setSelectedWorkTypes('');
    } else {
      setSelectedAvailability(availability);
    }

    handleChange('availability', availability);
  };

  const handleSelectWorkType = workType => {
    if (selectedWorkTypes.indexOf(workType) === -1) {
      handleChange('work_types', [...selectedWorkTypes, workType]);
      setSelectedWorkTypes([...selectedWorkTypes, workType]);
    } else {
      setSelectedWorkTypes([
        ...selectedWorkTypes.filter(item => item !== workType),
      ]);
      handleChange('work_types', [
        ...selectedWorkTypes.filter(item => item !== workType),
      ]);
    }
  };
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const navigate = async routeName => {
    const {navigation} = props;
    await navigation.navigate(routeName);
  };

  useEffect(() => {
    // dispatch(getUser());
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
        image={image}
        uploadImage={uploadImage}
        workTypes={workTypes}
        handleSelectWorkType={handleSelectWorkType}
        selectedWorkTypes={selectedWorkTypes}
        handleSelectAvailability={handleSelectAvailability}
        availabilityDutations={JOBS_ENUM.availability_duration}
        timePerWeekValues={JOBS_ENUM.time_per_week}
        selectedAvailability={selectedAvailability}
        handleSelectTimePerWeek={handleSelectTimePerWeek}
        selectedTimePerWeek={selectedTimePerWeek}
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
