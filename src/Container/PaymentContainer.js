import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {PaymentScreen} from '../Screen';
import {white} from '../utils/Theme/Color';

const PaymentContainer = props => {
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
      <PaymentScreen navigate={navigate} goBack={goBack} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default PaymentContainer;
