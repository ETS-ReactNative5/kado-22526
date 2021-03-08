import React, {useRef} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {
  BottomDate,
  BottomHeader,
  FeedCard,
  FeedHeader,
  Filters,
  SearchBar,
  SheetItems,
} from '../components';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  amountBorder,
  blackColorText,
  buttonColor,
  feedItemBack,
  themeColor,
  white,
} from '../utils/Theme/Color';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {ScaledSheet} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native';

const JobsScreen = ({
  navigate,
  jobList,
  isloading,
  josCategoryList,
  typeProList,
  handleJobFilter,
  handleChange,
  data,
  handleAmountFilter,
  handleDateFilter,
  isDatePickerVisible,
  handleConfirm,
  showDatePicker,
  dateText,
  hideDatePicker,
  isDatePickerVisibleSecond,
  showDatePickerSecond,
  hideDatePickerSecond,
  handleConfirmSecond,
  endDate,
  searchJobs,
  dispatch,
  addFavorite,
  removeFavoriteJob,
  profileDetail,
}) => {
  const renderItem = ({item}) => (
    <FeedCard
      title={item?.title}
      description={item?.description}
      experience_level={item?.experience_level}
      skills={item?.skills}
      is_favorite={item?.is_favorite}
      addFavorite={addFavorite}
      removeFavoriteJob={removeFavoriteJob}
      id={item?.id}
    />
  );

  const renderCategory = ({item}) => (
    <SheetItems
      handleJobFilter={handleJobFilter}
      refRBSheet={refRBSheet}
      title={item?.value}
      name={item?.name}
      paramName="job_category"
    />
  );
  const renderProTypes = ({item}) => (
    <SheetItems
      handleJobFilter={handleJobFilter}
      refRBSheet={refRBSheetProject}
      title={item?.value}
      name={item?.name}
      paramName="job_type"
    />
  );
  const refRBSheet = useRef();
  const refRBSheetProject = useRef();
  const refRBSheetDate = useRef();
  const refRBSheetLocation = useRef();
  const refRBSheetPay = useRef();
  return (
    <View style={styles.container}>
      <FeedHeader
        navigate={navigate}
        rightBtns={true}
        profileDetail={profileDetail}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={true}
        animationType="fade"
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#000',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          },
          container: {
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          },
        }}>
        <BottomHeader
          hideCheckIcon={true}
          refRBSheet={refRBSheet}
          title="Sort by Category"
        />

        <FlatList renderItem={renderCategory} data={josCategoryList} />
      </RBSheet>

      <RBSheet
        ref={refRBSheetProject}
        closeOnPressMask={true}
        animationType="fade"
        height={400}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#000',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          },
          container: {
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          },
        }}>
        <BottomHeader
          hideCheckIcon={true}
          refRBSheet={refRBSheetProject}
          title="Sort by Type of Project"
          data={data.location}
        />
        <FlatList renderItem={renderProTypes} data={typeProList} />
      </RBSheet>

      <RBSheet
        ref={refRBSheetDate}
        closeOnPressMask={true}
        animationType="fade"
        height={300}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#000',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          },
          container: {
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          },
        }}>
        <BottomHeader
          dateClick={true}
          refRBSheet={refRBSheetDate}
          title="Sort by Date"
          data={data}
          handleDateFilter={handleDateFilter}
        />
        <BottomDate
          handleChange={handleChange}
          title="Start"
          placeholder="DD/MM/YYY"
          value={`${dateText}`}
          // handleChange={() =>}
          onChangeText={value => handleChange('start_date', value)}
          onPress={() => showDatePicker()}
        />

        <BottomDate
          handleChange={handleChange}
          title="Finish"
          placeholder="DD/MM/YYY "
          value={`${endDate}`}
          onChangeText={value => handleChange('end_date', value)}
          onPress={() => showDatePickerSecond()}
        />
        <BottomDate
          handleChange={handleChange}
          title="Availability"
          placeholder="Total hours per week"
          editable={true}
        />
      </RBSheet>

      <RBSheet
        ref={refRBSheetLocation}
        closeOnPressMask={true}
        animationType="fade"
        height={300}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#000',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          },
          container: {
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          },
        }}>
        <BottomHeader
          refRBSheet={refRBSheetLocation}
          title="Sort by Location"
          click={true}
          handleJobFilter={handleJobFilter}
        />
        <View style={styles.locationContainer}>
          <TextInput
            placeholderTextColor="rgba(rgba(41, 41, 41, 0.2))"
            style={styles.inputLocation}
            placeholder="Type in your Location"
            onChangeText={value => handleChange('location', value)}
          />
        </View>
      </RBSheet>

      <RBSheet
        ref={refRBSheetPay}
        closeOnPressMask={true}
        animationType="fade"
        height={200}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#000',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          },
          container: {
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          },
        }}>
        <BottomHeader
          handleAmountFilter={handleAmountFilter}
          refRBSheet={refRBSheetPay}
          title="Sort by Pay"
          min_data={data?.min_pay}
          max_data={data?.max_pay}
        />
        <View style={styles.paymentContainer}>
          <View style={styles.amountContainer}>
            <TextInput
              placeholderTextColor="rgba(rgba(41, 41, 41, 0.2))"
              style={styles.inputLocation}
              placeholder="Min $"
              keyboardType="numeric"
              onChangeText={value => handleChange('min_pay', value)}
            />
          </View>

          <View style={styles.amountContainer}>
            <TextInput
              placeholderTextColor="rgba(rgba(41, 41, 41, 0.2))"
              style={styles.inputLocation}
              placeholder="Max $"
              keyboardType="numeric"
              onChangeText={value => handleChange('max_pay', value)}
            />
          </View>
        </View>
      </RBSheet>
      <View style={styles.body}>
        <SearchBar
          onChangeText={value => dispatch(searchJobs(value))}
          placeHolder="Search for your next jobs..."
        />
        <View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <DateTimePickerModal
            isVisible={isDatePickerVisibleSecond}
            onConfirm={handleConfirmSecond}
            onCancel={hideDatePickerSecond}
          />
        </View>
        <View>
          <View style={styles.filtersContainer}>
            <Text style={styles.filterText}>Filters:</Text>
            <TouchableOpacity onPress={() => navigate('Explore')}>
              <Icons name="clear" size={22} color={buttonColor} />
            </TouchableOpacity>
          </View>
          <View style={styles.categoryContainer}>
            <ScrollView contentContainerStyle={styles.categoryContainer}>
              <Filters refRBSheet={refRBSheet} title="Category" />
              <Filters refRBSheet={refRBSheetProject} title="Type of project" />
              <Filters refRBSheet={refRBSheetDate} title="Date" />
              <Filters refRBSheet={refRBSheetLocation} title="Location" />
              <Filters refRBSheet={refRBSheetPay} title="Payment" />
            </ScrollView>
          </View>
        </View>

        <View style={styles.tabContainer}>
          {isloading ? (
            <View style={styles.empty}>
              <ActivityIndicator color={buttonColor} />
            </View>
          ) : jobList?.length === 0 ? (
            <View style={styles.empty}>
              <Text>No jobs</Text>
            </View>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              data={jobList}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  body: {
    flex: 1,
    padding: '10@s',
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20@s',
  },
  helloText: {
    fontSize: '32@s',
    lineHeight: '43@s',
    color: themeColor,
  },
  userName: {
    fontSize: '32@s',
    lineHeight: '43@s',
    color: themeColor,
    fontWeight: 'bold',
    width: '65%',
  },
  tabContainer: {
    flex: 1,
    marginTop: '14@s',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: '10@s',
  },
  filterText: {
    fontSize: '14@s',
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: '20@s',
    letterSpacing: '1@s',
    color: themeColor,
  },
  locationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLocation: {
    color: blackColorText,
    fontSize: '15@s',
    lineHeight: '18@s',
  },
  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '15@s',
  },
  amountContainer: {
    width: '49%',
    borderColor: amountBorder,
    borderWidth: 1,
    borderRadius: '5@s',
    paddingLeft: '10@s',
    backgroundColor: feedItemBack,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default JobsScreen;
