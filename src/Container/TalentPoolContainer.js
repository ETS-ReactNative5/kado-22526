import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {ScaledSheet} from 'react-native-size-matters';
import {TalentPoolScreen} from '../Screen';
import {white} from '../utils/Theme/Color';

import {
  fetchProjectsType,
  fetchjobsCategory,
  fetchAllJobsDate,
  fetchJobs,
  addFavoriteJob,
  removeFavorite,
  getJobsAfter,
} from '../actions/jobs';
import {
  fetchStudents,
  fetchStudentsAfter,
  filterStudents,
  fetchStudentsByName,
} from '../actions/profile';

const TalentPoolContainer = props => {
  const {isloading, typeProList} = useSelector(state => state.jobs);
  const {profileDetail, studentsList} = useSelector(store => store.profile);

  const [state, setState] = useState(false);
  const [dateText, setDateText] = useState('');
  const [endDate, setEndDate] = useState('');
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
    dispatch(fetchStudents());
    dispatch(fetchjobsCategory());
    dispatch(fetchProjectsType());
  }, []);

  useEffect(() => {
    dispatch(getJobsAfter());
    dispatch(fetchStudentsAfter());
  }, [state]);

  const handleJobFilter = (key, param) => {
    dispatch(filterStudents([{[key]: param}]));
  };

  const handleAmountFilter = (min_value = 0, max_value = 0) => {
    dispatch(filterStudents([{min_pay: min_value}, {max_pay: max_value}]));
  };

  const handleDateFilter = (from_date, min_date) => {
    dispatch(fetchAllJobsDate('start_date', dateText, 'end_date', endDate));
  };

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
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
    hideDatePickerSecond();
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
      <TalentPoolScreen
        studentsList={studentsList?.results || []}
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
        searchJobs={fetchStudentsByName}
        dispatch={dispatch}
        addFavorite={addFavor}
        removeFavoriteJob={removeFavoriteJob}
        profileDetail={profileDetail}
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

export default TalentPoolContainer;
