import React from 'react';
import _ from 'lodash';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {BackHeader} from '../../components';

import {
  buttonColor,
  white,
  feedItemBack,
  amountBorder,
} from '../../utils/Theme/Color';
import {PostContext} from '../../context/PostProvider';
import {JOBS_ENUM} from '../../constants/jobs';

const PostViewScreen = ({loading, handleSubmit, data}) => {
  const {categories} = React.useContext(PostContext);

  const getObjectName = (arr, value) => {
    const item = arr.find(obj => obj.id === value);
    return item ? item['name'] : '';
  };

  const getSalary = () => {
    if (data.budget_type === 'per_hour') {
      return `${data.min_pay}-${data.max_pay}`;
    }
    if (data.budget_type === 'fixed_price') {
      return data.fixed_price;
    }
    return 'Negotiable';
  };

  return (
    <View style={styles.container}>
      <BackHeader rightBtns={true} image rightCloseIcon />
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Job details</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.fieldTitleText}>Category</Text>
          <View>
            <View style={styles.inputContainer}>
              <Text style={styles.textAreaText}>
                {getObjectName(categories, data.category)}
              </Text>
            </View>
          </View>

          <Text style={styles.fieldTitleText}>Title</Text>
          <View>
            <View style={styles.inputContainer}>
              <Text style={styles.textAreaText}>{data.title}</Text>
            </View>
          </View>

          <Text style={styles.fieldTitleText}>Description</Text>
          <View>
            <View style={styles.textAreaContainer}>
              <Text style={styles.textAreaText}>{data.description}</Text>
            </View>
          </View>

          <Text style={styles.fieldTitleText}>What you'll do?</Text>
          <View>
            <View style={styles.textAreaContainer}>
              <Text style={styles.textAreaText}>{data.responsibilities}</Text>
            </View>
          </View>

          <Text style={styles.fieldTitleText}>Skills</Text>
          <View>
            <View style={styles.textAreaContainer}>
              <Text style={styles.textAreaText}>{data.skills}</Text>
            </View>
          </View>

          <Text style={styles.fieldTitleText}>Salary</Text>
          <View>
            <View style={styles.textAreaContainer}>
              <Text style={styles.textAreaText}>{getSalary()}</Text>
            </View>
          </View>

          <Text style={styles.fieldTitleText}>Duration</Text>
          <View>
            <View style={styles.textAreaContainer}>
              <Text style={styles.textAreaText}>
                {getObjectName(
                  JOBS_ENUM.availability_duration,
                  data.duration
                )}
              </Text>
            </View>
          </View>

          <Text style={styles.fieldTitleText}>Time</Text>
          <View>
            <View style={styles.textAreaContainer}>
              <Text style={styles.textAreaText}>
                {getObjectName(JOBS_ENUM.time_per_week, data.time)}
              </Text>
            </View>
          </View>

          <Text style={styles.fieldTitleText}>Location</Text>
          <View>
            <View style={styles.textAreaContainer}>
              <Text style={styles.textAreaText}>{data.location}</Text>
            </View>
          </View>

          <Text style={styles.fieldTitleText}>People</Text>
          <View>
            <View style={styles.textAreaContainer}>
              <Text style={styles.textAreaText}>{data.people}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              ...styles.postBtnContainer,
              ...(data?.is_applied ? {backgroundColor: 'grey'} : {}),
            }}
            loading={loading}
            disabled={data?.is_applied}
            onPress={() => handleSubmit()}>
            <Text style={styles.postText}>
              {data?.is_applied ? 'Applied' : 'Apply'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  buttonText: {
    fontWeight: '700',
    fontSize: '16@s',
  },
  button: {
    padding: '10@s',
    backgroundColor: feedItemBack,
    marginTop: '15@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: white,
  },
  bodyContainer: {
    paddingBottom: '40@s',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60@s',
  },
  text: {
    textAlign: 'center',
    marginTop: '50@s',
    fontSize: '18@s',
    lineHeight: '21@s',
    fontWeight: '700',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    padding: '20@s',
  },
  postText: {
    color: white,
    fontSize: '14@s',
    lineHeight: '18@s',
    marginLeft: '5@s',
  },

  postBtnContainer: {
    padding: '10@s',
    backgroundColor: buttonColor,
    marginTop: '50@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldTitleText: {
    marginLeft: '20@s',
    marginTop: '10@s',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textAreaText: {
    fontSize: 16,
  },
  inputContainer: {
    paddingLeft: '10@s',
    paddingRight: '10@s',
    paddingTop: '10@s',
    paddingBottom: '20@s',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: feedItemBack,
    borderRadius: '8@s',
    marginTop: '3@s',
    borderColor: amountBorder,
    borderWidth: 1,
  },
  textAreaContainer: {
    paddingLeft: '10@s',
    paddingRight: '10@s',
    paddingTop: '10@s',
    paddingBottom: '20@s',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: feedItemBack,
    borderRadius: '8@s',
    marginTop: '3@s',
    borderColor: amountBorder,
    borderWidth: 1,
  },
});

export default PostViewScreen;
