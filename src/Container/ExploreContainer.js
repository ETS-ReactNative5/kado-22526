import React from 'react';
import {SafeAreaView} from 'react-native';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {ExploreScreen} from '../Screen';
import {white} from '../utils/Theme/Color';

const ExploreContainer = props => {
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };
  const navigate = async routeName => {
    const {navigation} = props;
    if (routeName === 'drawer') {
      navigation.openDrawer();
    } else {
      await navigation.navigate(routeName);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ExploreScreen navigate={navigate} goBack={goBack} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default ExploreContainer;
