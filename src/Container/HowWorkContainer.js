import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {HowWorkScreen} from '../Screen';
import {white} from '../utils/Theme/Color';

import {fetchAllFaq, addFaq, fetchFaq} from '../actions/faq';

const HowWorkContainer = props => {
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const navigate = async routeName => {
    const {navigation} = props;
    await navigation.navigate(routeName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <HowWorkScreen goBack={goBack} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default HowWorkContainer;