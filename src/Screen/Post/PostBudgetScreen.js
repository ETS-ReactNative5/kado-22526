import React from 'react';
import {Formik} from 'formik';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';
import {BackHeader, Input, FieldError} from '../../components';
import {PostContext} from '../../context/PostProvider';
import {jobsFields} from '../../constants/jobs';
import {
  buttonColor,
  white,
  feedItemBack,
  themeColor,
} from '../../utils/Theme/Color';
import {getPlaceholder} from '../../utils/misc';
import {validateBudget} from '../../utils/validation/postValidation';
const PostBudgetScreen = () => {
  const navigation = useNavigation();
  const {data, setData} = React.useContext(PostContext);
  const selectedBtnStyle = (itemName, values) =>
    values === itemName ? styles.textInactive : {};
  return (
    <Formik
      initialValues={{
        [jobsFields.budget_type]: data.budget_type || '',
        [jobsFields.fixed_price]: data.fixed_price || '',
        [jobsFields.min_pay]: data.min_pay || '',
        [jobsFields.max_pay]: data.max_pay || '',
      }}
      validate={validateBudget}
      onSubmit={values => setData({...data, ...values})}>
      {({
        handleChange,
        setFieldValue,
        handleSubmit,
        errors,
        values,
        touched,
      }) => (
        <View style={styles.container}>
          <BackHeader rightBtns={true} image rightCloseIcon />
          <ScrollView contentContainerStyle={styles.bodyContainer}>
            <View style={styles.imageContainer}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>Choose your budget for the role</Text>
              </View>
            </View>
            <View style={styles.body}>
              <View style={{marginTop: 50}}>
                <View style={styles.formField}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      handleChange(jobsFields.budget_type);
                      setFieldValue(
                        jobsFields.budget_type,
                        jobsFields.fixed_price,
                      );
                    }}>
                    <Text
                      style={{
                        ...styles.buttonText,
                        ...selectedBtnStyle(
                          jobsFields.fixed_price,
                          values.budget_type,
                        ),
                      }}>
                      Fixed Price
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.labelText}>Fixed amount:</Text>

                  <View style={{width: '49%'}}>
                    <Input
                      secureTextEntry={false}
                      iconShow={false}
                      name={jobsFields.fixed_price}
                      iconName="chevron-down"
                      placeholder={getPlaceholder(data.fixed_price, 'Amount $')}
                      keyboardType="numeric"
                      onChange={value => {
                        handleChange(jobsFields.fixed_price);
                        setFieldValue(jobsFields.fixed_price, value);
                        handleChange(jobsFields.budget_type);
                        setFieldValue(
                          jobsFields.budget_type,
                          jobsFields.fixed_price,
                        );
                      }}
                    />
                    <FieldError
                      errors={errors}
                      field={jobsFields.fixed_price}
                      touched={touched}
                    />
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.formField}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      handleChange(jobsFields.budget_type);
                      setFieldValue(
                        jobsFields.budget_type,
                        jobsFields.per_hour,
                      );
                    }}>
                    <Text
                      style={{
                        ...styles.buttonText,
                        ...selectedBtnStyle(
                          jobsFields.per_hour,
                          values.budget_type,
                        ),
                      }}>
                      Per Hour
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.labelText}>Hourly Pay Margin:</Text>
                  <View style={styles.marginContainer}>
                    <View style={{width: '49%'}}>
                      <Input
                        secureTextEntry={false}
                        iconShow={false}
                        iconName="chevron-down"
                        placeholder={getPlaceholder(data.min_pay, 'Min $')}
                        keyboardType="numeric"
                        name="min_pay"
                        onChange={value => {
                          handleChange(jobsFields.min_pay);
                          setFieldValue(jobsFields.min_pay, value);
                          handleChange(jobsFields.budget_type);
                          setFieldValue(
                            jobsFields.budget_type,
                            jobsFields.per_hour,
                          );
                        }}
                      />
                    </View>
                    <View style={{width: '49%'}}>
                      <Input
                        secureTextEntry={false}
                        iconShow={false}
                        iconName="chevron-down"
                        placeholder={getPlaceholder(data.max_pay, 'Max $')}
                        keyboardType="numeric"
                        name="max_pay"
                        onChange={value => {
                          handleChange(jobsFields.max_pay);
                          setFieldValue(jobsFields.max_pay, parseInt(value));
                          handleChange(jobsFields.budget_type);
                          setFieldValue(
                            jobsFields.budget_type,
                            jobsFields.per_hour,
                          );
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <FieldError
                errors={errors}
                field={jobsFields.min_pay}
                touched={touched}
              />
              <View>
                <View style={styles.formField}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      handleChange(jobsFields.budget_type);
                      setFieldValue(
                        jobsFields.budget_type,
                        jobsFields.negotiable,
                      );
                    }}>
                    <Text
                      style={{
                        ...styles.buttonText,
                        ...selectedBtnStyle(
                          jobsFields.negotiable,
                          values.budget_type,
                        ),
                      }}>
                      Negotiable
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={styles.postBtnContainer}
                onPress={() => {
                  const err = validateBudget(values);
                  if (Object.keys(err).length === 0) {
                    navigation.navigate('PostDuration');
                  }
                  handleSubmit();
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
  textInactive: {color: buttonColor},
  marginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelText: {
    marginTop: '5@s',
    color: themeColor,
    fontWeight: '600',
  },
  formField: {
    marginTop: '10@s',
  },
  button: {
    padding: '10@s',
    backgroundColor: feedItemBack,
    marginTop: '15@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '700',
    fontSize: '16@s',
  },
  container: {
    flex: 1,
    backgroundColor: white,
  },
  bodyContainer: {
    paddingBottom: '40@s',
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
    marginTop: '40@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostBudgetScreen;
