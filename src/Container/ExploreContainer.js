import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {ExploreScreen} from '../Screen';
import {white} from '../utils/Theme/Color';

const ExploreContainer = props => {
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ExploreScreen goBack={goBack} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default ExploreContainer;
