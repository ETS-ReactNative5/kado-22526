import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {View, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ActionCreators} from '../actions';
import {ScaledSheet} from 'react-native-size-matters';
import {JobsScreen} from '../Screen';
import {white} from '../utils/Theme/Color';

const JobsContainer = props => {
  const {
    fetchAlljOBS,
    jobList,
    fetchAllSavedJobs,
    saveJobsList,
    fetchjobsCategory,
    josCategoryList,
    isLoading,
    typeProList,
    fetchProjectsType,
  } = props;
  console.log('propsss', props);
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
    fetchAlljOBS();
    fetchAllSavedJobs();
    fetchjobsCategory();
    fetchProjectsType();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <JobsScreen
        saveJobsList={saveJobsList}
        jobList={jobList}
        navigate={navigate}
        goBack={goBack}
        josCategoryList={josCategoryList}
        isLoading={isLoading}
        typeProList={typeProList}
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};

const mapStateToProps = state => {
  return {
    isLoading: state.jobs.isLoading,
    jobList: state.jobs.jobList,
    saveJobsList: state.jobs.saveJobsList,
    josCategoryList: state.jobs.josCategoryList,
    typeProList: state.jobs.typeProList,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobsContainer);
