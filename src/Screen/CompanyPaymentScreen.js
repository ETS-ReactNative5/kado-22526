import React from 'react';
import {View, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {BackHeader} from '../components';
import {Text} from 'react-native';
import {buttonColor, fadedBlue} from '../utils/Theme/Color';
import {TouchableOpacity} from 'react-native';
import {PaymentImage} from '../assets/Image';

const CompanyPaymentScreen = ({goBack}) => {
  return (
    <View style={styles.container}>
      <BackHeader image={true} goBack={goBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <PaymentImage />
        </View>
        <TouchableOpacity>
          <Text style={styles.heading}>Payment</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.subHeading}>Connecting a Payment Method</Text>
          <Text style={styles.paragraph}>
            Using our in-app payment processor is required when working with
            students from our talent pool. We use Stripe to process our
            payments, which accepts all major debit and credit cards. After
            connecting a card, it'll be saved for future use, but will never be
            charged without your consent. You do have the option to set up
            payment with ACH. However, setting up your payment method with a
            debit/credit card is highly recommended for faster processing time.
          </Text>
          <Text style={styles.subHeading}>Viewing Invoices</Text>
          <Text style={styles.paragraph}>
            Once the student you are working with has submitted an invoice, you
            will be able to see it in your dashboard. Each invoice includes the
            fixed amount of hours worked, along with an optional space for notes
          </Text>

          <Text style={styles.subHeading}>Payment Breakdown</Text>
          <Text style={styles.paragraph}>
            When viewing an invoice, you will be able to see the breakdown of
            the payment for the student's labor along with our processing fee.
          </Text>

          <Text style={styles.subHeading}>Processing Time</Text>
          <Text style={styles.paragraph}>
            The first time someone is paid through Stripe, processing time can
            be up to 7 business days. If your payment method is debit/credit
            card every subsequent transaction should only take 1-2 business days
            to process. The debit/credit payment method is recommended for the
            fastest and best experience. If your payment method is ACH and you
            are transacting for the first time you will receive two small
            deposits 1-2 days after uploading banking information. You will need
            to confirm the deposit amounts with the Kado team in order to verify
            your bank account. Once verified processing time for all ACH
            payments will always be 7- 10 business days. For more information,
            view the dashboard in your Stripe account.
          </Text>
        </View>
      </ScrollView>
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
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
  subHeading: {
    color: fadedBlue,
    fontSize: 21,
    fontWeight: '600',
    marginBottom: 12,
    marginTop: 12,
  },
  paragraph: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 12,
  },
});

export default CompanyPaymentScreen;
