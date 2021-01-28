import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ScaledSheet} from 'react-native-size-matters';
import {NotSignedScreen} from '../Screen';

import {fetchAlljOBS, fetchAllSavedJobs} from '../actions/jobs';

const NotSignedContainer = props => {
  const dispatch = useDispatch();
  const {jobList, saveJobsList, isloading} = useSelector(state => state.jobs);

  const navigate = async routeName => {
    const {navigation} = props;
    if (routeName === 'drawer') {
      navigation.openDrawer();
    } else {
      await navigation.navigate(routeName);
    }
  };

  useEffect(() => {
    dispatch(fetchAlljOBS());
    dispatch(fetchAllSavedJobs());
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <NotSignedScreen
        saveJobsList={saveJobsList}
        jobList={jobList}
        navigate={navigate}
        isLoading={isloading}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default NotSignedContainer;
