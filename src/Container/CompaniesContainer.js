import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {CompaniesScreen} from '../Screen';
import {blackColorText, white} from '../utils/Theme/Color';

import {fetchCompanies} from '../actions/company';
import {Image} from 'react-native';

const CompaniesContainer = props => {
  const {isloading, companyList} = useSelector(state => state.company);

  const dispatch = useDispatch();
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const navigate = async (routeName, id) => {
    const {navigation} = props;
    await navigation.navigate(routeName, id);
  };

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CompaniesScreen
        companyList={companyList}
        navigate={navigate}
        goBack={goBack}
        isloading={isloading}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default CompaniesContainer;
