import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {CompanyInfoScreen} from '../Screen';
import {white} from '../utils/Theme/Color';

import {fetchCompanyByName} from '../actions/company';

const CompanyInfoContainer = props => {
  console.log('propsssssss', props);
  const {params} = props.route;
  const {singleCompany, isloading} = useSelector(state => state.company);
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanyByName(params));
  }, []);
  return (
    <View style={styles.container}>
      <CompanyInfoScreen
        singleCompany={singleCompany}
        isloading={isloading}
        goBack={goBack}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default CompanyInfoContainer;
