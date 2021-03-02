import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {PostBudgetScreen} from '../../Screen';
import {white} from '../../utils/Theme/Color';

const PostBudgetContainer = props => {
  return (
    <SafeAreaView style={styles.container}>
      <PostBudgetScreen />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default PostBudgetContainer;
