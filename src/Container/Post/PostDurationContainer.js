import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {PostDurationScreen} from '../../Screen';
import {white} from '../../utils/Theme/Color';

const PostDurationContainer = props => {
  return (
    <SafeAreaView style={styles.container}>
      <PostDurationScreen />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default PostDurationContainer;
