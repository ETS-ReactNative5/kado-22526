import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {CompanyInfoScreen} from '../Screen';
import {white} from '../utils/Theme/Color';

const CompanyInfoContainer = props => {
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <CompanyInfoScreen goBack={goBack} />
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
