import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {PostDescriptionScreen} from '../../Screen';
import {white} from '../../utils/Theme/Color';

const PostDescriptionContainer = props => {
  return (
    <SafeAreaView style={styles.container}>
      <PostDescriptionScreen />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default PostDescriptionContainer;
