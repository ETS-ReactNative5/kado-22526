import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ActionCreators} from '../actions';
import {ScaledSheet} from 'react-native-size-matters';
import {NewsFeedScreen} from '../Screen';

const NewsFeedContainer = props => {
  const {
    fetchAlljOBS,
    jobList,
    fetchAllSavedJobs,
    saveJobsList,
    isLoading,
  } = props;
  const navigate = async routeName => {
    const {navigation} = props;
    if (routeName === 'drawer') {
      navigation.openDrawer();
    } else {
      await navigation.navigate(routeName);
    }
  };

  useEffect(() => {
    fetchAlljOBS();
    fetchAllSavedJobs();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <NewsFeedScreen
        saveJobsList={saveJobsList}
        jobList={jobList}
        navigate={navigate}
        isLoading={isLoading}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};

const mapStateToProps = state => {
  return {
    isLoading: state.jobs.isLoading,
    jobList: state.jobs.jobList,
    saveJobsList: state.jobs.saveJobsList,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsFeedContainer);
