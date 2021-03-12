import React, {useRef} from 'react';
import {Formik} from 'formik';
import {View, ScrollView, Text, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';
import RBSheet from 'react-native-raw-bottom-sheet';
import {BackHeader, BottomHeader, FieldError} from '../../components';
import {PostContext} from '../../context/PostProvider';
import {
  buttonColor,
  white,
  feedItemBack,
  fadedBlue,
  dimGrey,
} from '../../utils/Theme/Color';
import {JOBS_ENUM, jobsFields} from '../../constants/jobs';
import {validateDuration} from '../../utils/validation/postValidation';

const PostDurationScreen = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef();

  const {data, setData} = React.useContext(PostContext);
  const selectedBtnStyle = (itemName, values) =>
    values === itemName ? styles.textInactive : {};

  return (
    <Formik
      initialValues={{
        [jobsFields.duration]: data.duration || '',
        [jobsFields.time]: data.time || '',
      }}
      validateOnChange
      validate={validateDuration}
      onSubmit={values => setData({...data, ...values})}>
      {({
        handleChange,
        setFieldValue,
        handleSubmit,
        values,
        errors,
        touched,
      }) => {
        const renderItem = ({item}) => (
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleChange(jobsFields.duration);
                setFieldValue(jobsFields.duration, item.id);
              }}>
              <Text
                style={{
                  ...styles.buttonText,
                  ...selectedBtnStyle(item.id, values.duration),
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        );
        const renderTimeItem = ({item}) => (
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleChange(jobsFields.time);
                setFieldValue(jobsFields.time, item.id);
              }}>
              <Text
                style={{
                  ...styles.buttonText,
                  ...selectedBtnStyle(item.id, values.time),
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        );
        const renderRBItem = ({item}) => (
          <View style={styles.rbItem}>
            <TouchableOpacity
              style={styles.rbBtnContainer}
              onPress={() => {
                refRBSheet.current.close();
                handleChange(jobsFields.location);
                setFieldValue(jobsFields.location, item);
              }}>
              <Text style={styles.categoryBtnText}>{item}</Text>
            </TouchableOpacity>
          </View>
        );
        return (
          <View style={styles.container}>
            <BackHeader rightBtns={true} image rightCloseIcon />
            <ScrollView contentContainerStyle={styles.bodyContainer}>
              <View style={styles.body}>
                <View style={styles.formField}>
                  <Text style={styles.text}>Add the duration</Text>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    data={JOBS_ENUM.availability_duration}
                    style={styles.flatlist}
                    keyExtractor={item => item.name}
                  />
                  <FieldError
                    errors={errors}
                    field={jobsFields.duration}
                    touched={touched}
                  />
                </View>
                <View style={styles.formField}>
                  <Text style={styles.text}>Add time commitment</Text>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    renderItem={renderTimeItem}
                    data={JOBS_ENUM.time_per_week}
                    style={styles.flatlist}
                    keyExtractor={item => item.name}
                  />
                  <FieldError
                    errors={errors}
                    field={jobsFields.time}
                    touched={touched}
                  />
                </View>
                <RBSheet
                  ref={refRBSheet}
                  closeOnPressMask={true}
                  animationType="fade"
                  height={170}
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
                    title="Role Location"
                  />

                  <FlatList
                    renderItem={renderRBItem}
                    data={JOBS_ENUM.countries}
                    keyExtractor={item => item}
                  />
                </RBSheet>
                <TouchableOpacity
                  style={styles.locationBtnContainer}
                  onPress={() => refRBSheet.current.open()}>
                  <Text style={styles.postText}>Add role location</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.postBtnContainer}
                  onPress={() => {
                    handleSubmit();
                    const err = validateDuration(values);
                    if (Object.keys(err).length === 0) {
                      navigation.navigate('PostPeople');
                    }
                  }}>
                  <Text style={styles.postText}>Next</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = ScaledSheet.create({
  textInactive: {color: buttonColor},
  categoryBtnText: {
    fontWeight: '600',
    fontSize: '14@s',
  },
  container: {
    flex: 1,
    backgroundColor: white,
  },
  bodyContainer: {
    paddingBottom: '40@s',
  },
  buttonText: {
    fontWeight: '700',
    fontSize: '16@s',
    color: dimGrey,
  },
  button: {
    padding: '10@s',
    backgroundColor: feedItemBack,
    marginTop: '15@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formField: {
    marginTop: '5@s',
  },
  text: {
    textAlign: 'center',
    marginTop: '30@s',
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
    marginTop: '20@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationBtnContainer: {
    padding: '10@s',
    backgroundColor: fadedBlue,
    marginTop: '20@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rbBtnContainer: {
    justifyContent: 'center',
  },
  rbItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15@s',
    borderBottomColor: feedItemBack,
    borderBottomWidth: 1,
  },
});

export default PostDurationScreen;
