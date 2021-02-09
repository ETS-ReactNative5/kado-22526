import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const BlankPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View />
    </SafeAreaView>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});
export default BlankPage;
