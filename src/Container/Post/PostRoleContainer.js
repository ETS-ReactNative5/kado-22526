import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {PostRoleScreen} from '../../Screen';
import {white} from '../../utils/Theme/Color';

const TalentPoolContainer = props => {
  return (
    <SafeAreaView style={styles.container}>
      <PostRoleScreen />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default TalentPoolContainer;
