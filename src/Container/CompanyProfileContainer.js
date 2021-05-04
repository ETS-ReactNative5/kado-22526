import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Storage from '../lib/requests/storage';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {CompanyProfileScreen} from '../Screen';
import {getProfileById, updateProfileById} from '../actions/profile';
import {fetchCompanyById} from '../actions/company';
import {KadoContext} from '../context/KadoProvider';

const CompanyProfileContainer = props => {
  const [image] = useState('');

  const {userGroup} = React.useContext(KadoContext);

  const [available, setAvailable] = useState(false)
  const dispatch = useDispatch();
  const {profileDetail, isloading} = useSelector(store => store.profile);
  const {singleCompany, isloading: singleLoading} = useSelector(
    state => state.company,
  );

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
    dispatch(
      updateProfileById(profileDetail?.id, {
        status: !profileDetail?.status,
      }),
    );
    setAvailable(!available);
  };

  useEffect(() => {
    
      setAvailable(profileDetail?.status);
    
  }, [profileDetail]);

  useEffect(() => {
    setDataFunc();
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
      <CompanyProfileScreen
        profileData={params ? singleCompany : profileDetail}
        navigate={navigate}
        goBack={goBack}
        isloading={params ? singleLoading : isloading}
        image={image}
        navigation={navigation}
        updateProfileStatus={updateProfileStatus}
        available={available}
        user_group={userGroup}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default CompanyProfileContainer;
