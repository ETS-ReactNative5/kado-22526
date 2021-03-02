import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';
import {BackHeader, Input, TextArea, FieldError} from '../../components';

import {buttonColor, white} from '../../utils/Theme/Color';
import {getPlaceholder} from '../../utils/misc';
import {Formik} from 'formik';
import {PostContext} from '../../context/PostProvider';
import {descriptionValidationSchema} from '../../utils/validation/postValidation';
import {jobsFields} from '../../constants/jobs';

const PostDescriptionScreen = () => {
  const navigation = useNavigation();
  const {data, setData} = React.useContext(PostContext);
  return (
    <Formik
      initialValues={{
        [jobsFields.title]: data.title || '',
        [jobsFields.responsibilities]: data.responsibilities || '',
        [jobsFields.description]: data.description || '',
      }}
      validationSchema={descriptionValidationSchema}
      validateOnChange
      onSubmit={values => {
        setData({...data, ...values});
      }}>
      {({
        handleChange,
        setFieldValue,
        handleSubmit,
        errors,
        isValid,
        values,
      }) => (
        <View style={styles.container}>
          <BackHeader rightBtns={true} image rightCloseIcon />
          <ScrollView contentContainerStyle={styles.bodyContainer}>
            <View style={styles.imageContainer}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>Add Description</Text>
              </View>
            </View>
            <View style={styles.body}>
              <View style={{marginTop: 50}}>
                <Input
                  secureTextEntry={false}
                  iconShow={false}
                  name={jobsFields.title}
                  placeholder={getPlaceholder(data.title, 'Type role title')}
                  onChange={value => {
                    handleChange(jobsFields.title);
                    setFieldValue(jobsFields.title, value);
                  }}
                />
                <FieldError errors={errors} field={jobsFields.title} />
              </View>
              <View>
                <TextArea
                  secureTextEntry={false}
                  iconShow={false}
                  name={jobsFields.description}
                  placeholder={getPlaceholder(
                    data.description,
                    'Type main requirements',
                  )}
                  customStyles={styles.textArea}
                  onChange={value => {
                    handleChange(jobsFields.description);
                    setFieldValue(jobsFields.description, value);
                  }}
                />
                <FieldError errors={errors} field={jobsFields.description} />
              </View>
              <View>
                <TextArea
                  secureTextEntry={false}
                  iconShow={false}
                  name={jobsFields.responsibilities}
                  placeholder={getPlaceholder(
                    data.responsibilities,
                    'Type main responsibilities',
                  )}
                  customStyles={styles.textArea}
                  onChange={value => {
                    handleChange(jobsFields.responsibilities);
                    setFieldValue(jobsFields.responsibilities, value);
                  }}
                />
                <FieldError
                  errors={errors}
                  field={jobsFields.responsibilities}
                />
              </View>

              <TouchableOpacity
                style={styles.postBtnContainer}
                onPress={async () => {
                  await handleSubmit();
                  if (
                    values.title &&
                    isValid &&
                    Object.keys(errors).length === 0
                  ) {
                    navigation.navigate('PostSkills');
                  }
                }}>
                <Text style={styles.postText}>Next</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

const styles = ScaledSheet.create({
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
    marginTop: '80@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostDescriptionScreen;
