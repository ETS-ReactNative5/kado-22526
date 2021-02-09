import React from 'react';
import {FlatList} from 'react-native';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {BackHeader, CompaniesItem, SearchBar} from '../components';
import {blackColorText, buttonColor, lightGray} from '../utils/Theme/Color';

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
          <ActivityIndicator color={buttonColor} />
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
