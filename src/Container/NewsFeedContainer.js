import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreators} from '../actions';
import {ScaledSheet} from 'react-native-size-matters';
import {NewsFeedScreen} from '../Screen';

import {fetchAlljOBS, fetchAllSavedJobs} from '../actions/jobs';

const NewsFeedContainer = props => {
  const dispatch = useDispatch();
  const jobList = useSelector(state => state.jobs.jobList);
  const saveJobsList = useSelector(state => state.jobs.saveJobsList);
  const isloading = useSelector(state => state.jobs.isloading);
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
      <NewsFeedScreen
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

export default NewsFeedContainer;
