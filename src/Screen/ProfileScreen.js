import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import calander from '../assets/Image/calander.png';
import uset from '../assets/Image/userImageTwo.png';
import editButton from '../assets/Image/editbtn.png';
import {BackHeader, Header, Input} from '../components';
import {
  buttonColor,
  darkBlue,
  lightBlackColor,
  lightGray,
  lughtBlue,
  themeColor,
  white,
} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';
import {ActivityIndicator} from 'react-native';
import {EditProfileIcon} from '../assets/Image';

const ProfileScreen = ({
  goBack,
  navigate,
  profileData,
  isloading,
  handleChange,
  updateLoading,
  handleSubmit,
  uploadImage,
  image,
}) => {
  return (
    <View style={styles.container}>
      <BackHeader title="Profile Info" goBack={goBack} />
      <View style={{flex: 1}}>
        {isloading ? (
          <View style={styles.empty}>
            <ActivityIndicator color={buttonColor} />
          </View>
        ) : (
          <ScrollView contentContainerStyle={styles.bodyContainer}>
            <View style={styles.body}>
              <View style={styles.imageContainer}>
                <View>
                  {image !== '' ? (
                    <Image style={styles.image} source={image} />
                  ) : (
                    <View>
                      {profileData?.photo === null ? (
                        <Image
                          resizeMode="cover"
                          style={styles.image}
                          source={image}
                        />
                      ) : (
                        <Image
                          resizeMode="cover"
                          style={styles.image}
                          source={{uri: profileData?.photo}}
                        />
                      )}
                    </View>
                  )}
                  <TouchableOpacity
                    onPress={() => uploadImage()}
                    style={styles.editBtnContainer}>
                    <EditProfileIcon />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{marginTop: 50}}>
                <Input
                  secureTextEntry={false}
                  iconShow={false}
                  // placeholder="Name of University"
                  placeholder={
                    profileData?.university === null
                      ? 'Name of University'
                      : `${profileData?.university}`
                  }
                  onChange={value => handleChange('university', value)}
                />
              </View>
              <View>
                <Input
                  secureTextEntry={false}
                  iconShow={false}
                  placeholder={
                    profileData?.field_of_study === null
                      ? 'Field of Study'
                      : `${profileData?.field_of_study}`
                  }
                  onChange={value => handleChange('field_of_study', value)}
                />
              </View>
              <View>
                <Text style={styles.payMarginText}>
                  Relevant Skills: (Seperate your skill with ; )
                </Text>

                <View style={styles.skillContainer}>
                  {profileData?.skills.map(item => {
                    return (
                      <View style={styles.skillItem}>
                        <Text style={styles.skillBtnText}>{item} </Text>
                      </View>
                    );
                  })}
                </View>
              </View>
              <View style={styles.inputCOntainer}>
                <Input
                  secureTextEntry={false}
                  iconShow={true}
                  // placeholder="Years of experience"
                  placeholder={
                    profileData?.years_of_experience === null
                      ? 'Years of experience'
                      : `${profileData?.years_of_experience}`
                  }
                  onChange={value => handleChange('years_of_experience', value)}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.inputCOntainer}>
                <Input
                  secureTextEntry={false}
                  keyboardType="numeric"
                  iconShow={true}
                  // placeholder="Work type(full-time,part-time,remote etc)"
                  placeholder={
                    profileData?.work_type === null
                      ? 'Work type(full-time,part-time,remote etc)'
                      : ` ${profileData?.work_type}`
                  }
                  onChange={value => handleChange('work_type', value)}
                />
              </View>
              <View style={styles.inputCOntainer}>
                <Input
                  secureTextEntry={false}
                  iconShow={false}
                  // placeholder="Hours available per week"
                  placeholder={
                    profileData?.hours_per_week === null
                      ? 'Hours available per week'
                      : `${profileData?.hours_per_week}`
                  }
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.inputCOntainer}>
                <Input
                  secureTextEntry={false}
                  iconShow={true}
                  placeholder={
                    profileData?.allowed_to_work === null
                      ? 'Allowed to work in the US?'
                      : `${profileData?.allowed_to_work}`
                  }
                />
              </View>
              <Text style={styles.payMarginText}>Pay margin:</Text>
              <View style={styles.ammountContainer}>
                <View style={{width: '49%'}}>
                  <Input
                    secureTextEntry={false}
                    iconShow={false}
                    iconName="chevron-down"
                    placeholder={
                      profileData?.min_pay === null
                        ? 'Min $'
                        : `${profileData?.min_pay}`
                    }
                    onChange={value => handleChange('min_pay', value)}
                  />
                </View>
                <View style={{width: '49%'}}>
                  <Input
                    secureTextEntry={false}
                    iconShow={false}
                    iconName="chevron-down"
                    // placeholder="Max $"
                    placeholder={
                      profileData?.max_pay === null
                        ? 'Max $'
                        : `${profileData?.max_pay}`
                    }
                    keyboardType="numeric"
                    onChange={value => handleChange('max_pay', value)}
                  />
                </View>
              </View>
              <TouchableOpacity
                onPress={() => handleSubmit()}
                style={styles.registerBtnContainer}>
                {updateLoading ? (
                  <ActivityIndicator color={white} />
                ) : (
                  <Text style={styles.registerText}>Save</Text>
                )}
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  bodyContainer: {
    // flex: 1,
    padding: '1@s',
    paddingBottom: '20@s',
    justifyContent: 'space-between',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50@s',
    marginBottom: '100@s',
  },
  text: {
    fontSize: '17@s',
    lineHeight: '20@s',
    color: themeColor,
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: '10@s',
  },
  body: {
    padding: '10@s',
    paddingLeft: '15@s',
    paddingRight: '15@s',
    justifyContent: 'center',
  },
  registerBtnContainer: {
    padding: '10@s',
    backgroundColor: buttonColor,
    marginTop: '30@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: white,
    fontSize: '14@s',
    lineHeight: '18@s',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: buttonColor,
    fontSize: '14@s',
    lineHeight: '18@s',
    marginLeft: '5@s',
  },
  alreadyText: {
    color: lightBlackColor,
    fontSize: '14@s',
    lineHeight: '18@s',
  },
  forgotPasswordContainer: {
    marginTop: '10@s',
    alignItems: 'flex-end',
  },

  forgotPasswordText: {
    color: buttonColor,
    fontSize: '12@s',
    lineHeight: '14@s',
    fontWeight: 'bold',
  },

  image: {
    height: '128@s',
    width: '128@s',
    borderRadius: 35,
    resizeMode: 'cover',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20@s',
  },
  editBtnContainer: {
    position: 'absolute',
    bottom: 0,
    right: '-7@s',
  },
  inputCOntainer: {
    marginTop: '5@s',
  },
  registerBtnContainer: {
    padding: '10@s',
    backgroundColor: buttonColor,
    marginTop: '30@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: white,
    fontSize: '14@s',
    lineHeight: '18@s',
  },
  ammountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  payMarginText: {
    marginLeft: '20@s',
    marginTop: '10@s',
    color: themeColor,
    fontWeight: 'bold',
  },
  skillContainer: {
    borderColor: '#CBCBCB',
    borderWidth: 1,
    paddingLeft: '10@s',
    paddingRight: '10@s',
    paddingTop: '3@s',
    paddingBottom: '20@s',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: lightGray,
    borderRadius: '8@s',
    marginTop: '3@s',
  },
  skillItem: {
    backgroundColor: '#E1E4F6',

    borderRadius: '20@s',
    marginTop: '5@s',
    padding: '7@s',
    paddingRight: '12@s',
    paddingLeft: '12@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '3@s',
    marginRight: '3@s',
  },
  skillBtnText: {
    fontSize: '11@s',
    lineHeight: '13@s',
    fontWeight: 'bold',
    color: buttonColor,
  },

  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
