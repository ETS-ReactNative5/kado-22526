import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {BackHeader} from '../components';
import {Text} from 'react-native';
import {buttonColor} from '../utils/Theme/Color';
import {TouchableOpacity} from 'react-native';
import {PaymentImage} from '../assets/Image';

const PaymentScreen = ({goBack}) => {
  return (
    <View style={styles.container}>
      <BackHeader image={true} goBack={goBack} />
      <View style={styles.imageContainer}>
        <PaymentImage />
      </View>
      <TouchableOpacity>
        <Text style={styles.heading}>Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15@s',
  },
  heading: {
    textAlign: 'center',
    marginTop: '50@s',
    color: buttonColor,
    fontSize: '18@s',
    lineHeight: '21@s',
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
