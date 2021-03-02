import React from 'react';
import {Formik} from 'formik';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';
import {BackHeader, Input} from '../../components';

import {buttonColor, white, feedItemBack} from '../../utils/Theme/Color';
import {getPlaceholder} from '../../utils/misc';
import {PostContext} from '../../context/PostProvider';

const PostPeopleScreen = () => {
  const navigation = useNavigation();
  const {data, setData} = React.useContext(PostContext);
  const selectedBtnStyle = (itemName, values) =>
    values === itemName ? styles.textInactive : {};

  return (
    <Formik
      initialValues={{
        people: data.people || '',
      }}
      onSubmit={values => setData({...data, ...values})}>
      {({handleChange, setFieldValue, handleSubmit, values}) => (
        <View style={styles.container}>
          <BackHeader rightBtns={true} image rightCloseIcon />
          <ScrollView contentContainerStyle={styles.bodyContainer}>
            <View style={styles.imageContainer}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>Number of people you need</Text>
              </View>
            </View>
            <View style={styles.body}>
              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    handleChange('people');
                    setFieldValue('people', 1);
                  }}>
                  <Text
                    style={{
                      ...styles.buttonText,
                      ...selectedBtnStyle(1, values.people),
                    }}>
                    1
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    handleChange('people');
                    setFieldValue('people', 2);
                  }}>
                  <Text
                    style={{
                      ...styles.buttonText,
                      ...selectedBtnStyle(2, values.people),
                    }}>
                    2
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <Input
                  secureTextEntry={false}
                  iconShow={false}
                  name="people"
                  keyboardType="numeric"
                  onChange={value => {
                    handleChange('people');
                    setFieldValue('people', value);
                  }}
                  placeholder={getPlaceholder(
                    data.people,
                    'Type specific number',
                  )}
                />
              </View>

              <TouchableOpacity
                style={styles.postBtnContainer}
                onPress={() => {
                  handleSubmit();
                  navigation.navigate('PostReview');
                }}>
                <Text style={styles.postText}>Continue to review</Text>
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
    marginTop: '80@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostPeopleScreen;
