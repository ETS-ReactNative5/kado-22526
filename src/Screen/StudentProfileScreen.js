import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Switch} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BackHeader} from '../components';
import {
  dimGrey,
  buttonColor,
  lightBlackColor,
  themeColor,
  feedItemBack,
  btnBackColor,
  white,
} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';
import {ActivityIndicator} from 'react-native';

const StudentProfileScreen = ({
  goBack,
  profileData,
  isloading,
  image,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <BackHeader title="" goBack={goBack} />
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
                </View>
              </View>

              <View style={styles.profileHeader}>
                <Text style={styles.profileName}>{profileData?.fullname}</Text>
                <View style={styles.profileAvailability}>
                  <Switch
                    style={{
                      transform: [
                        {scaleX: moderateScale(1, 3)},
                        {scaleY: moderateScale(1, 3)},
                      ],
                    }}
                    thumbColor="white"
                    trackColor={{true: '#36C559'}}
                    value={true}
                  />
                  <Text style={styles.availabilityText}>Available</Text>
                </View>
                <Text style={styles.subTitleText}>
                  {profileData?.university}
                </Text>
                <Text style={styles.subTitleText}>
                  {profileData?.field_of_study}
                </Text>
              </View>

              <Text style={styles.fieldTitleText}>My Story</Text>
              <View>
                <View style={styles.textAreaContainer}>
                  <Text>{profileData?.tagline}</Text>
                </View>
              </View>

              <Text style={styles.fieldTitleText}>My Experience</Text>
              <View>
                <View style={styles.textAreaContainer}>
                  <Text>{profileData?.work_experience}</Text>
                </View>
              </View>

              <Text style={styles.fieldTitleText}>Skills</Text>
              <View>
                <View style={styles.textAreaContainer}>
                  <Text>
                    {profileData?.skills?.toString().replace(/,/g, '; ')}
                  </Text>
                </View>
              </View>

              <Text style={styles.fieldTitleText}>Languages</Text>
              <View>
                <View style={styles.textAreaContainer}>
                  <Text>
                    {profileData?.languages?.toString().replace(/,/g, '; ')}
                  </Text>
                </View>
              </View>

              <View>
                <Text style={styles.payMarginText}>Work type</Text>
                <View style={styles.skillContainer}>
                  {profileData?.work_types?.map(item => {
                    return (
                      <View style={styles.skillItem} key={item}>
                        <Text style={styles.skillBtnText}>{item}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>

              <View>
                <Text style={styles.payMarginText}>Availability</Text>
                <View style={styles.skillContainer}>
                  {profileData?.availability ? (
                    <View style={styles.skillItem}>
                      <Text style={styles.skillBtnText}>
                        {profileData?.availability}
                      </Text>
                    </View>
                  ) : null}
                </View>
              </View>

              <View>
                <Text style={styles.payMarginText}>
                  Time commitment per week
                </Text>
                <View style={styles.skillContainer}>
                  {profileData?.time_per_week ? (
                    <View style={styles.skillItem}>
                      <Text style={styles.skillBtnText}>
                        {profileData?.time_per_week}
                      </Text>
                    </View>
                  ) : null}
                </View>
              </View>

              <Text style={styles.payMarginText}>
                Hourly pay margin (min-max)
              </Text>
              <View style={styles.ammountContainer}>
                <View style={{width: '49%'}}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>
                      {profileData?.min_pay} $
                    </Text>
                  </View>
                </View>
                <View style={{width: '49%'}}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>
                      {profileData?.max_pay} $
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={styles.payMarginText}>
                Are you allowed to work in the US?
              </Text>
              <View style={styles.inputContainer}>
                <Text style={styles.inputText}>
                  {profileData?.allowed_to_work}
                </Text>
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
                  <Icon name="language" size={20} color={buttonColor} />
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
  availabilityText: {marginLeft: 12, fontWeight: '600', textAlign: 'center'},
  subTitleText: {margin: 12, fontWeight: '700', textAlign: 'center'},
  profileAvailability: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 23,
  },
  profileHeader: {
    flex: 1,
    marginBottom: 16,
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
  fieldTitleText: {
    marginLeft: '20@s',
    marginTop: '10@s',
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
    height: 70,
  },
  inputText: {fontSize: 15},
  contact: {
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
    fontSize: '14@s',
    lineHeight: '18@s',
    color: themeColor,
    fontWeight: '600',
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

export default StudentProfileScreen;
