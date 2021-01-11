import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {EditProfileScreen} from '../Screen';
import AboutUsScreen from '../Screen/AboutUsScreen';

const AboutUsContainer = (props) => {
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <AboutUsScreen goBack={goBack} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default AboutUsContainer;
