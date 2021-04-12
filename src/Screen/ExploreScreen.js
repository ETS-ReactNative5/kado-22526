import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {
  JobsIcon,
  CompanyIcon,
  FaqIcon,
  PaymentsIcon,
  LogoutIcon,
  DeleteIcon,
  TalentIcon,
  DollarIcon,
} from '../assets/Image';
import {BackHeader} from '../components';
import Storage from '../lib/requests/storage';
import {themeColor} from '../utils/Theme/Color';

const ExploreScreen = ({goBack, navigate, user_groups}) => {
  const navigation = useNavigation();
  const logOut = () => {
    Storage.removeData('access_token');
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
  return (
    <View style={styles.container}>
      <BackHeader goBack={goBack} title="Explore" />

      <View style={styles.body}>
        <View>
          {user_groups === 'company' ? (
            <View>
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => navigate('TalentPool')}>
                <TalentIcon />
                <Text style={styles.text}>Talent pool</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => navigate('CompanyPayment')}>
                <DollarIcon />
                <Text style={[styles.text, {marginLeft: 30}]}>
                  Payment & Pricing
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigate('FAQ')}
                style={styles.itemContainer}>
                <FaqIcon />
                <Text style={styles.text}>FAQ</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                onPress={() => navigate('Jobs')}
                style={styles.itemContainer}>
                <JobsIcon />
                <Text style={styles.text}>Jobs</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigate('CompaniesList')}
                style={styles.itemContainer}>
                <CompanyIcon />
                <Text style={styles.text}>Companies</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigate('Payment')}
                style={styles.itemContainer}>
                <PaymentsIcon />
                <Text style={styles.text}>Payments</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigate('FAQ')}
                style={styles.itemContainer}>
                <FaqIcon />
                <Text style={styles.text}>FAQ</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View>
          <TouchableOpacity style={styles.itemContainer} onPress={logOut}>
            <LogoutIcon />
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '15@s',
    paddingBottom: '15@s',
    paddingLeft: '15@s',
    paddingRight: '15@s',
    borderTopWidth: '0.5@s',
    // borderBottomColor: '#F2F1F8',
    borderTopColor: '#F2F1F8',
    // borderBottomWidth: '0.5@s',
  },
  text: {
    marginLeft: '10@s',
    fontSize: '14@s',
    lineHeight: '16@s',
    fontWeight: '700',
    color: themeColor,
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default ExploreScreen;
