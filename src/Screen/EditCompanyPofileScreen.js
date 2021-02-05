import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import user from '../assets/Image/userImageTwo.png';
import {BackHeader, Input} from '../components';
import apple from '../assets/Image/apple.png';
import {
  buttonColor,
  lightBlackColor,
  themeColor,
  white,
} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';
import {EditProfileIcon} from '../assets/Image';

const EditCompanyPofileScreen = ({goBack, refRBSheet}) => {
  return (
    <View style={styles.container}>
      <BackHeader title="Edit Profile" goBack={goBack} />
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.bodyContainer}>
          <View style={styles.body}>
            <View style={styles.imageContainer}>
              <View>
                <Image resizeMode="cover" style={styles.image} source={apple} />

                <TouchableOpacity
                  onPress={() => refRBSheet.current.open()}
                  style={styles.editBtnContainer}>
                  <EditProfileIcon />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 50}}>
              <Input
                secureTextEntry={false}
                iconShow={false}
                placeholder="Company or Start-up name"
              />
            </View>

            <View style={styles.inputCOntainer}>
              <Input
                secureTextEntry={false}
                iconShow={true}
                placeholder="Location"
                iconName="map-marker-alt"
                // value={isloading ? `Location` : `${profileDetail?.location}`}
              />
            </View>
            <View style={styles.inputCOntainer}>
              <Input
                secureTextEntry={false}
                iconShow={false}
                placeholder="Industry"
              />
            </View>
            <View style={styles.inputCOntainer}>
              <Input
                secureTextEntry={false}
                // iconShow={true}
                // iconName="chevron-down"
                placeholder="Phone"
              />
            </View>

            <TouchableOpacity style={styles.registerBtnContainer}>
              <Text style={styles.registerText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goBack} style={styles.cancelBtn}>
              <Text style={styles.registerText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
