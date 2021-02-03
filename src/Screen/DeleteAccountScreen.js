import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ArrowImage from '../assets/Image/Leftarrowicon.png';
import KadoImage from '../assets/Image/logo.png';
import {BackHeader} from '../components';
import {themeColor, white} from '../utils/Theme/Color';

const DeleteAccountScreen = ({
  goBack,
  profileDetail,
  isloading,
  handleSubmit,
}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <BackHeader goBack={goBack} />
      <View style={{padding: 20, flex: 1}}>
        <View style={styles.kadoContainer}>
          <View style={styles.kadoimageContainer}>
            <Image source={KadoImage} />
          </View>
          <Text style={styles.seeyouText}>We are sad to see you go...</Text>
          <Text style={styles.delaccountText}>
            Are you sure you want to delete your account?
          </Text>
          <View>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#001CD6'}]}
              onPress={() => handleSubmit()}>
              <Text style={[styles.saveText]}>Yes</Text>
              {/* </View> */}
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => alert('salman')}>
              <View style={[styles.button, {backgroundColor: '#03D1F9'}]}>
                <Text style={styles.saveText}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
    backgroundColor: white,
  },
  kadoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  kadoimageContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '25@s',
  },
  seeyouText: {
    fontSize: '18@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '21@s',
    letterSpacing: '1@s',
    textAlign: 'center',
    marginBottom: '5@s',
    color: '#001CD6',
  },
  delaccountText: {
    fontSize: '14@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '21@s',
    letterSpacing: '1@s',
    textAlign: 'center',
    color: themeColor,
  },
  button: {
    padding: 10,
    borderRadius: '5@s',
    marginTop: '10@s',
    backgroundColor: '#38B6FF',
  },
  saveText: {
    color: white,

    fontSize: '14@s',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '18@s',
    letterSpacing: '1@s',
    textAlign: 'center',
    padding: 5,
  },
});

export default DeleteAccountScreen;
