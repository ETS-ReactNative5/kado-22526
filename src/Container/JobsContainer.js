import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {ScaledSheet} from 'react-native-size-matters';
import {JobsScreen} from '../Screen';
import {white} from '../utils/Theme/Color';

import {
  fetchAllSavedJobs,
  fetchAllJobsAmount,
  fetchAlljOBS,
  fetchProjectsType,
  fetchjobsCategory,
  fetchAllJobsDate,
  fetchJobs,
} from '../actions/jobs';

const JobsContainer = props => {
  const {jobList, saveJobsList, isloading, typeProList} = useSelector(
    state => state.jobs,
  );
  const [dateText, setDateText] = useState('');
  const [endDate, setEndDate] = useState('');
  const sdsds = useSelector(state => console.log('sdadas', state));
  const dispatch = useDispatch();

  const [data, setData] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisibleSecond, setDatePickerVisibilitySecond] = useState(
    false,
  );
  const josCategoryList = useSelector(state => state.jobs.josCategoryList);

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
    dispatch(fetchJobs());
    dispatch(fetchAlljOBS());
    dispatch(fetchAllSavedJobs());
    dispatch(fetchjobsCategory());
    dispatch(fetchProjectsType());
  }, []);

  const handleJobFilter = (key, param) => {
    dispatch(fetchAlljOBS(key, param));
  };

  const handleAmountFilter = (min_value = 0, max_value = 0) => {
    dispatch(fetchAllJobsAmount('min_pay', min_value, 'max_pay', max_value));
  };

  const handleDateFilter = (from_date, min_date) => {
    dispatch(fetchAllJobsDate('start_date', dateText, 'end_date', endDate));
  };

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });

    console.log('Moiz Babar', data);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    let myDate = moment(date).format('YYYY-MM-DD');
    setDateText(myDate);
    console.warn('A date has been picked: ', myDate);
    hideDatePicker();
  };

  const showDatePickerSecond = () => {
    setDatePickerVisibilitySecond(true);
  };

  const hideDatePickerSecond = () => {
    setDatePickerVisibilitySecond(false);
  };

  const handleConfirmSecond = date => {
    let myDate = moment(date).format('YYYY-MM-DD');
    setEndDate(myDate);
    console.warn('A date has been picked: ', myDate);
    hideDatePickerSecond();
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
        handleChange={handleChange}
        data={data}
        handleAmountFilter={handleAmountFilter}
        handleDateFilter={handleDateFilter}
        isDatePickerVisible={isDatePickerVisible}
        isDatePickerVisibleSecond={isDatePickerVisibleSecond}
        setDatePickerVisibility={setDatePickerVisibility}
        showDatePicker={showDatePicker}
        handleConfirm={handleConfirm}
        hideDatePicker={hideDatePicker}
        dateText={dateText}
        showDatePickerSecond={showDatePickerSecond}
        hideDatePickerSecond={hideDatePickerSecond}
        handleConfirmSecond={handleConfirmSecond}
        endDate={endDate}
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
