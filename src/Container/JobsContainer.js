import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ScaledSheet} from 'react-native-size-matters';
import {JobsScreen} from '../Screen';
import {white} from '../utils/Theme/Color';

import {
  fetchAllSavedJobs,
  fetchAlljOBS,
  fetchProjectsType,
  fetchjobsCategory,
} from '../actions/jobs';

const JobsContainer = props => {
  const {
    jobList,

    saveJobsList,
    isloading,
    typeProList,
  } = useSelector(state => state.jobs);

  const dispatch = useDispatch();

  const josCategoryList = useSelector(state => state.jobs.josCategoryList);

  console.log('josCategoryList', josCategoryList);

  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };
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
    dispatch(fetchjobsCategory());
    dispatch(fetchProjectsType());
  }, []);

  const handleJobFilter = (key, param) => {
    dispatch(fetchAlljOBS(key, param));
  };
  return (
    <SafeAreaView style={styles.container}>
      <JobsScreen
        saveJobsList={saveJobsList}
        jobList={jobList}
        navigate={navigate}
        goBack={goBack}
        josCategoryList={josCategoryList}
        isloading={isloading}
        typeProList={typeProList}
        handleJobFilter={handleJobFilter}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default JobsContainer;
