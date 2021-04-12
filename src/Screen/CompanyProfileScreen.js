import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Switch} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BackHeader, ImageView} from '../components';
import {
  dimGrey,
  buttonColor,
  lightBlackColor,
  themeColor,
  feedItemBack,
  btnBackColor,
  addressColor,
  white,
} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';
import {ActivityIndicator} from 'react-native';
import {DEFAULT_PIC} from '../constants/profile';

const CompanyProfileScreen = ({
  goBack,
  profileData,
  isloading,
  image,
  navigation,
  available,
  updateProfileStatus,
}) => {
  return (
    <View style={styles.container}>
      <BackHeader title="" />
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
                    <ImageView style={styles.image} source={image} />
                  ) : (
                    <View>
                      {profileData?.photo === null ? (
                        <Image
                          resizeMode="cover"
                          style={styles.image}
                          source={{
                            uri: DEFAULT_PIC,
                          }}
                        />
                      ) : (
                        <Image
                          resizeMode="cover"
                          style={styles.image}
                          source={{
                            uri: profileData?.photo || DEFAULT_PIC,
                          }}
                        />
                      )}
                    </View>
                  )}
                </View>
              </View>

              <View style={styles.profileHeader}>
                <Text style={styles.profileName}>{profileData?.fullname}</Text>
                <View style={styles.profileAvailability}>
                  <Switch
                    thumbColor="white"
                    trackColor={{true: '#36C559'}}
                    value={available}
                    onValueChange={() => updateProfileStatus()}
                  />
                  <Text style={styles.availabilityText}>Hiring</Text>
                </View>
                <Text style={styles.subTitleText}>{profileData?.location}</Text>
              </View>
              <View style={styles.headingContianer}>
                <Text style={styles.subHeader}>
                  {profileData?.total_jobs || 0}
                </Text>
                <Text style={styles.adderess}>Jobs Posted</Text>
              </View>
              <Text style={styles.fieldTitleText}>About Company</Text>
              <View>
                <View style={styles.textAreaContainer}>
                  <Text>{profileData?.bio}</Text>
                </View>
              </View>

              <View style={styles.contact}>
                <TouchableOpacity
                  style={styles.footerbtn}
                  onPress={() =>
                    navigation.navigate('Chat', {
                      threadId: profileData?.thread_id,
                      profileId: profileData?.id,
                    })
                  }>
                  <Icon name="language" size={22} color={buttonColor} />
                  <Text style={styles.footerText}>Contact</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  subHeader: {
    fontSize: '20@s',
    lineHeight: '38@s',
    color: themeColor,
    fontWeight: '400',
  },
  adderess: {
    fontSize: '13@s',
    lineHeight: '16@s',
    color: addressColor,
    textAlign: 'center',
    width: '90%',
  },
  headingContianer: {
    marginTop: '2@s',
    marginBottom: '10@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  availabilityText: {marginLeft: 12, fontWeight: '600', textAlign: 'center'},
  subTitleText: {margin: 12, fontWeight: '700', textAlign: 'center'},
  profileAvailability: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 23,
  },
  profileHeader: {
    flex: 1,
    marginBottom: 6,
  },
  profileName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
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
    marginTop: '10@s',
    marginBottom: '10@s',
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
  editBtnContainer: {
    position: 'absolute',
    bottom: 0,
    right: '-7@s',
  },
  inputCOntainer: {
    marginTop: '5@s',
  },
  ammountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fieldTitleText: {
    marginLeft: '20@s',
    marginTop: '10@s',
    marginBottom: '10@s',
    color: buttonColor,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  payMarginText: {
    marginLeft: '20@s',
    marginTop: '10@s',
    color: themeColor,
    fontWeight: 'bold',
  },
  textAreaContainer: {
    paddingLeft: '10@s',
    paddingRight: '10@s',
    paddingTop: '5@s',
    paddingBottom: '20@s',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: feedItemBack,
    borderRadius: '8@s',
    marginTop: '3@s',
    minHeight: 70,
  },
  inputText: {fontSize: 15},
  contact: {
    marginTop: '30@s',
    padding: '30@s',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerbtn: {
    backgroundColor: btnBackColor,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '10@s',
    borderRadius: '15@s',
  },
  footerText: {
    fontSize: '13@s',
    lineHeight: '18@s',
    color: themeColor,
    fontWeight: '700',
    marginLeft: '10@s',
  },
  inputContainer: {
    borderColor: '#CBCBCB',
    borderWidth: 1,
    paddingLeft: '10@s',
    paddingRight: '10@s',
    paddingTop: '10@s',
    paddingBottom: '10@s',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: feedItemBack,
    borderRadius: '8@s',
    marginTop: '3@s',
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
    backgroundColor: feedItemBack,
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

export default CompanyProfileScreen;
