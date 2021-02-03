import React from 'react';
import {FlatList} from 'react-native';
import {Text, View, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BackHeader, CompaniesItem, SearchBar} from '../components';
import {blackColorText, buttonColor, lightGray} from '../utils/Theme/Color';

import IBM from '../assets/Image/IBM.png';
import cocacola from '../assets/Image/cocacola.png';
import huwei from '../assets/Image/huwei.png';
import samsung from '../assets/Image/samsung.png';

import twitter from '../assets/Image/twitter.png';

import cnn from '../assets/Image/cnn.png';

import newyork from '../assets/Image/newyork.png';
import hp from '../assets/Image/hp.png';
import carfor from '../assets/Image/carfor.png';
import eroksi from '../assets/Image/eroksi.png';
import {ActivityIndicator} from 'react-native';

const CompaniesScreen = ({
  goBack,
  navigate,
  isloading,
  companyList,
  fetchCompanyByName,
  dispatch,
}) => {
  const renderItem = ({item}) => (
    <CompaniesItem
      image={item.photo}
      title={item.fullname}
      navigate={navigate}
      subtitle={item.location}
      id={item?.id}
    />
  );
  return (
    <View style={styles.container}>
      <BackHeader goBack={goBack} title="Companies" />
      <View style={styles.searchHeader}>
        <SearchBar
          onChangeText={value => dispatch(fetchCompanyByName(value))}
          placeHolder="Search companies..."
        />
      </View>

      {isloading ? (
        <View style={styles.empty}>
          <ActivityIndicator />
        </View>
      ) : companyList?.count === 0 ? (
        <View style={styles.empty}>
          <Text>No Companies</Text>
        </View>
      ) : (
        <FlatList renderItem={renderItem} data={companyList?.results} />
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: lightGray,
    padding: '10@s',
    borderRadius: '7@s',
  },
  searchIconContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 0,
    lineHeight: '18@s',
    fontSize: '15@s',
    color: blackColorText,
    paddingRight: '15@s',
  },
  searchHeader: {
    padding: '10@s',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CompaniesScreen;
