import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {PostSkillsScreen} from '../../Screen';
import {white} from '../../utils/Theme/Color';

const PostSkillsContainer = props => {
  return (
    <SafeAreaView style={styles.container}>
      <PostSkillsScreen />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default PostSkillsContainer;
