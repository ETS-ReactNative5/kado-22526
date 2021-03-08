import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {BackHeader, Input, TextArea} from '../components';
import {
  buttonColor,
  lightBlackColor,
  themeColor,
  white,
} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';
import {EditProfileIcon} from '../assets/Image';
import {ActivityIndicator} from 'react-native';
import {getPlaceholder} from '../utils/misc';

const EditCompanyPofileScreen = ({
  goBack,
  profileDetail,
  updateLoading,
  handleUpdateProfile,
  handleChange,
  isloading,
  image,
  uploadImage,
}) => {
  return (
    <View style={styles.container}>
      <BackHeader title="Edit Profile" goBack={goBack} />
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
                      {profileDetail?.photo === null ? (
                        <Image
                          resizeMode="cover"
                          style={styles.image}
                          source={image}
                        />
                      ) : (
                        <Image
                          resizeMode="cover"
                          style={styles.image}
                          source={{uri: profileDetail?.photo}}
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
                    profileDetail?.fullname,
                    'Company or Start-up name',
                  )}
                  onChange={value => handleChange('fullname', value)}
                />
              </View>

              <View style={styles.inputCOntainer}>
                <Input
                  secureTextEntry={false}
                  iconShow={true}
                  placeholder={getPlaceholder(
                    profileDetail?.location,
                    'Location',
                  )}
                  iconName="map-marker-alt"
                  onChange={value => handleChange('location', value)}
                />
              </View>
              <View style={styles.inputCOntainer}>
                <Input
                  secureTextEntry={false}
                  iconShow={false}
                  placeholder={getPlaceholder(
                    profileDetail?.industry,
                    'Industry',
                  )}
                  onChange={value => handleChange('industry', value)}
                />
              </View>
              <View>
                <TextArea
                  secureTextEntry={false}
                  iconShow={false}
                  placeholder={getPlaceholder(
                    profileDetail?.bio,
                    'Tell us about your company',
                  )}
                  onChange={value => handleChange('bio', value)}
                  customStyles={styles.textArea}
                />
              </View>
              <View style={styles.inputCOntainer}>
                <Input
                  secureTextEntry={false}
                  placeholder={getPlaceholder(
                    profileDetail?.mobile_number,
                    'Phone',
                  )}
                  onChange={value => handleChange('mobile_number', value)}
                />
              </View>

              <TouchableOpacity
                onPress={() => handleUpdateProfile()}
                style={styles.registerBtnContainer}>
                {updateLoading ? (
                  <ActivityIndicator color={white} />
                ) : (
                  <Text style={styles.registerText}>Save</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity onPress={goBack} style={styles.cancelBtn}>
                <Text style={styles.registerText}>Cancel</Text>
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
    borderRadius: '150@s',
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
    right: '0@s',
  },
  inputCOntainer: {
    marginTop: '5@s',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelBtn: {
    padding: '10@s',
    backgroundColor: '#03D1F9',
    marginTop: '10@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditCompanyPofileScreen;
