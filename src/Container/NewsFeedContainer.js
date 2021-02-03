import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreators} from '../actions';
import {ScaledSheet} from 'react-native-size-matters';
import {NewsFeedScreen} from '../Screen';

import {
  fetchAlljOBS,
  fetchAllSavedJobs,
  addFavoriteJob,
  removeFavorite,
  searchJobs,
  searchSavedJobsByName,
  getJobsAfter,
  fetchAllSavedJobsAfter,
} from '../actions/jobs';
import {fetchProfile} from '../actions/profile';

const NewsFeedContainer = props => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const dispatchSaved = useDispatch();
  const jobList = useSelector(state => state.jobs.jobList);
  const saveJobsList = useSelector(state => state.jobs.saveJobsList);
  const isloading = useSelector(state => state.jobs.isloading);

  const addFavorite = useSelector(state => state.jobs.addFavorite);
  const removeJob = useSelector(state => state.jobs.removeJob);

  const {profileDetail} = useSelector(store => store.profile);

  const [profileId, setprofileid] = useState('');
  // const [favorite, setFavorite] = useState(false);
  const navigate = async routeName => {
    const {navigation} = props;
    if (routeName === 'drawer') {
      navigation.openDrawer();
    } else {
      await navigation.navigate(routeName);
    }
  };

  useEffect(() => {
    setDataFunc();
    dispatch(fetchAlljOBS());
    dispatch(fetchAllSavedJobs());
  }, []);

  useEffect(() => {
    dispatch(getJobsAfter());
    dispatch(fetchAllSavedJobsAfter());
  }, [state]);

  const setDataFunc = async () => {
    let token = '';
    await Storage.retrieveData('access_token').then(item => {
      token = item?.profile_id;
      setprofileid(item?.profile_id);
    });
    dispatch(fetchProfile(profileId));
  };

  const addFavor = id => {
    setState(!state);

    const params = {
      title: 'test',
      favorite: true,
    };
    dispatch(addFavoriteJob(id, params));
  };

  const removeFavoriteJob = id => {
    setState(!state);

    const params = {
      title: 'test',
      favorite: false,
    };
    dispatch(removeFavorite(id, params));
  };
  return (
    <SafeAreaView style={styles.container}>
      <NewsFeedScreen
        saveJobsList={saveJobsList}
        jobList={jobList}
        navigate={navigate}
        isLoading={isloading}
        profileDetail={profileDetail}
        addFavorite={addFavor}
        removeFavoriteJob={removeFavoriteJob}
        searchJobs={searchJobs}
        searchSavedJobs={searchSavedJobsByName}
        dispatch={dispatch}
        dispatchSaved={dispatchSaved}
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
