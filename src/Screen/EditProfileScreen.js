import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {BackHeader, Input, BottomHeader} from '../components';
import {
  buttonColor,
  lightBlackColor,
  themeColor,
  white,
  feedItemBack,
  amountBorder,
} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';
import {ActivityIndicator} from 'react-native';
import {EditProfileIcon} from '../assets/Image';
import {getPlaceholder} from '../utils/misc';
import {USER_TYPES} from '../constants/profile';
import RBSheet from 'react-native-raw-bottom-sheet';

const EditProfileScreen = ({
  goBack,
  navigate,
  isloading,
  profileDetail,
  handleChange,
  handleUpdateProfile,
  updateLoading,
  uploadImage,
  image,
}) => {
  const [gender, setGender] = React.useState(profileDetail?.gender);
  const refRBSheet = useRef();
  const renderItem = ({item}) => (
    <View>
      <TouchableOpacity
        style={styles.rbItem}
        onPress={() => {
          setGender(item);
          handleChange('gender', item);
          refRBSheet.current.close();
        }}>
        <Text style={styles.categoryBtnText}>{item}</Text>
      </TouchableOpacity>
    </View>
  );

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
                    'Full Name',
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
                  keyboardType="numeric"
                  iconShow={false}
                  placeholder={getPlaceholder(
                    profileDetail?.mobile_number,
                    'Phone',
                  )}
                  onChange={value => handleChange('mobile_number', value)}
                />
              </View>
              <View style={styles.inputCOntainer}>
                <TouchableOpacity
                  style={styles.textAreaContainer}
                  onPress={() => refRBSheet.current.open()}>
                  <Text style={styles.textAreaText}>
                    {getPlaceholder(gender, 'Gender')}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => handleUpdateProfile()}
                style={styles.registerBtnContainer}>
                {updateLoading ? (
                  <ActivityIndicator color={white} />
                ) : (
                  <Text style={styles.registerText}>Next</Text>
                )}
              </TouchableOpacity>
            </View>
            <RBSheet
              ref={refRBSheet}
              closeOnPressMask={true}
              animationType="fade"
              height={180}
              customStyles={{
                wrapper: {
                  backgroundColor: 'rgba(0,0,0,0.5)',
                },
                draggableIcon: {
                  backgroundColor: '#000',
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30,
                },
                container: {
                  borderTopRightRadius: 15,
                  borderTopLeftRadius: 15,
                },
              }}>
              <BottomHeader
                hideCheckIcon={true}
                refRBSheet={refRBSheet}
                title="Select Category"
              />

              <FlatList
                renderItem={renderItem}
                keyExtractor={(item, index) => {
                  return index;
                }}
                data={USER_TYPES.genderOptions}
              />
            </RBSheet>
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
  textAreaText: {
    fontSize: 16,
    color: '#9a9a9a',
  },
  textAreaContainer: {
    paddingLeft: '26@s',
    paddingRight: '10@s',
    paddingTop: '8@s',
    paddingBottom: '8@s',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: feedItemBack,
    borderRadius: '8@s',
    marginTop: '3@s',
    borderColor: amountBorder,
    borderWidth: 1,
  },
  rbItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15@s',
    borderBottomColor: feedItemBack,
    borderBottomWidth: 1,
  },
  rbBtnContainer: {
    justifyContent: 'center',
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
});

export default EditProfileScreen;
