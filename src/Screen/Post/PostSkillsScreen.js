import React from 'react';
import {Formik} from 'formik';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';
import {BackHeader, TextArea, FieldError} from '../../components';

import {buttonColor, white} from '../../utils/Theme/Color';
import {getPlaceholder} from '../../utils/misc';
import {PostContext} from '../../context/PostProvider';
import {jobsFields} from '../../constants/jobs';
import {skillsValidationSchema} from '../../utils/validation/postValidation';

const PostSkillsScreen = () => {
  const navigation = useNavigation();
  const {data, setData} = React.useContext(PostContext);
  return (
    <Formik
      initialValues={{
        [jobsFields.skills]: data.skills || '',
      }}
      validationSchema={skillsValidationSchema}
      validateOnChange
      onSubmit={values => setData({...data, ...values})}>
      {({
        handleChange,
        setFieldValue,
        handleSubmit,
        errors,
        values,
        isValid,
        touched,
      }) => (
        <View style={styles.container}>
          <BackHeader rightBtns={true} image rightCloseIcon />
          <ScrollView contentContainerStyle={styles.bodyContainer}>
            <View style={styles.imageContainer}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>
                  What skills are you looking for?
                </Text>
              </View>
            </View>
            <View style={styles.body}>
              <View style={{marginTop: 50}}>
                <TextArea
                  secureTextEntry={false}
                  iconShow={false}
                  numberOfLines={6}
                  name={jobsFields.skills}
                  placeholder={getPlaceholder(
                    data.skills,
                    'Type a skill (i.e Marketing; Writing; Re...)',
                  )}
                  onChange={value => {
                    handleChange(jobsFields.skills);
                    setFieldValue(jobsFields.skills, value);
                  }}
                  customStyles={styles.textArea}
                />
                <FieldError
                  errors={errors}
                  field={jobsFields.skills}
                  touched={touched}
                />
              </View>

              <TouchableOpacity
                style={styles.postBtnContainer}
                disabled={!isValid}
                onPress={() => {
                  handleSubmit();
                  if (values.skills) navigation.navigate('PostBudget');
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

export default PostSkillsScreen;
