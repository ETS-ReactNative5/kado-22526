import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {PostPeopleScreen} from '../../Screen';
import {white} from '../../utils/Theme/Color';

const PostPeopleContainer = props => {
  return (
    <SafeAreaView style={styles.container}>
      <PostPeopleScreen />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default PostPeopleContainer;
