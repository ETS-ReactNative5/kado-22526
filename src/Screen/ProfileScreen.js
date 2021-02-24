import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {BackHeader, Input} from '../components';
import {
  dimGrey,
  buttonColor,
  lightBlackColor,
  lightGray,
  themeColor,
  white,
} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';
import {ActivityIndicator} from 'react-native';
import {EditProfileIcon} from '../assets/Image';
import {getPlaceholder} from '../utils/misc';
import TextArea from '../components/TextArea';

const ProfileScreen = ({
  goBack,
  profileData,
  isloading,
  handleChange,
  updateLoading,
  handleSubmit,
  uploadImage,
  image,
  workTypes,
  handleSelectWorkType,
  selectedWorkTypes,
  availabilityDutations,
  handleSelectAvailability,
  selectedAvailability,
  selectedTimePerWeek,
  handleSelectTimePerWeek,
  timePerWeekValues,
}) => {
  const selectedBtnStyle = (items, itemName) =>
    items.indexOf(itemName) === -1 ? styles.skillBtnTextInactive : {};
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
                  placeholder={getPlaceholder(
                    profileData?.university,
                    'Name of University',
                  )}
                  onChange={value => handleChange('university', value)}
                />
              </View>
              <View>
                <Input
                  secureTextEntry={false}
                  iconShow={false}
                  placeholder={getPlaceholder(
                    profileData?.field_of_study,
                    'Field of Study',
                  )}
                  onChange={value => handleChange('field_of_study', value)}
                />
              </View>
              <Text style={styles.payMarginText}>My Story</Text>
              <View>
                <TextArea
                  secureTextEntry={false}
                  iconShow={false}
                  placeholder={getPlaceholder(
                    profileData?.tagline,
                    'Tell us a little about yourself',
                  )}
                  onChange={value => handleChange('tagline', value)}
                  customStyles={styles.textArea}
                />
              </View>
              <Text style={styles.payMarginText}>Work Experience</Text>
              <View>
                <TextArea
                  secureTextEntry={false}
                  iconShow={false}
                  placeholder={getPlaceholder(
                    profileData?.work_experience,
                    'Tell us a little about experience',
                  )}
                  onChange={value => handleChange('work_experience', value)}
                />
              </View>
              <Text style={styles.payMarginText}>
                Add relevant skills (separate with ; )
              </Text>
              <View>
                <TextArea
                  secureTextEntry={false}
                  iconShow={false}
                  placeholder={getPlaceholder(
                    profileData?.skills?.toString().replace(/,/g, '; '),
                    'Tell us a little about experience',
                  )}
                  onChange={value => handleChange('skills', value?.split(';'))}
                />
              </View>
              <Text style={styles.payMarginText}>
                Add language (separate with ; )
              </Text>
              <View>
                <TextArea
                  secureTextEntry={false}
                  iconShow={false}
                  placeholder={getPlaceholder(
                    profileData?.languages?.toString().replace(/,/g, '; '),
                    '',
                  )}
                  onChange={value =>
                    handleChange('languages', value?.split(';'))
                  }
                />
              </View>
              <View>
                <Text style={styles.payMarginText}>
                  Select work type (one or more)
                </Text>

                <View style={styles.skillContainer}>
                  {workTypes.map(item => {
                    return (
                      <View style={styles.skillItem} key={item.id}>
                        <TouchableOpacity
                          onPress={() => handleSelectWorkType(item.name)}>
                          <Text
                            style={{
                              ...styles.skillBtnText,
                              ...selectedBtnStyle(selectedWorkTypes, item.name),
                            }}>
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              </View>
              <View>
                <Text style={styles.payMarginText}>Select availability</Text>

                <View style={styles.skillContainer}>
                  {availabilityDutations.map(item => {
                    return (
                      <View style={styles.skillItem} key={item.id}>
                        <TouchableOpacity
                          onPress={() => handleSelectAvailability(item.name)}>
                          <Text
                            style={{
                              ...styles.skillBtnText,
                              ...selectedBtnStyle(
                                [selectedAvailability],
                                item.name,
                              ),
                            }}>
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              </View>
              <View>
                <Text style={styles.payMarginText}>
                  Select time commitment per week
                </Text>

                <View style={styles.skillContainer}>
                  {timePerWeekValues.map(item => {
                    return (
                      <View style={styles.skillItem} key={item.id}>
                        <TouchableOpacity
                          onPress={() => handleSelectTimePerWeek(item.name)}>
                          <Text
                            style={{
                              ...styles.skillBtnText,
                              ...selectedBtnStyle(
                                [selectedTimePerWeek],
                                item.name,
                              ),
                            }}>
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              </View>

              <Text style={styles.payMarginText}>Pay margin:</Text>
              <View style={styles.ammountContainer}>
                <View style={{width: '49%'}}>
                  <Input
                    secureTextEntry={false}
                    iconShow={false}
                    iconName="chevron-down"
                    placeholder={getPlaceholder(profileData?.min_pay, 'Min $')}
                    onChange={value => handleChange('min_pay', value)}
                    keyboardType="numeric"
                  />
                </View>
                <View style={{width: '49%'}}>
                  <Input
                    secureTextEntry={false}
                    iconShow={false}
                    iconName="chevron-down"
                    placeholder={getPlaceholder(
                      profileData?.max_pay || 'Max $',
                    )}
                    keyboardType="numeric"
                    onChange={value => handleChange('max_pay', value)}
                  />
                </View>
              </View>
              <Text style={styles.payMarginText}>
                Allowed to work in the US?
              </Text>
              <View style={styles.inputCOntainer}>
                <Input
                  secureTextEntry={false}
                  iconShow={true}
                  placeholder={getPlaceholder(
                    profileData?.allowed_to_work,
                    'Type in Yes or No',
                  )}
                  onChange={value => handleChange('allowed_to_work', value)}
                />
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
  skillBtnTextInactive: {
    color: dimGrey,
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
