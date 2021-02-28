import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {PostCategoryScreen} from '../../Screen';
import {white} from '../../utils/Theme/Color';

const PostCategoriesContainter = props => {
  return (
    <SafeAreaView style={styles.container}>
      <PostCategoryScreen />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default PostCategoriesContainter;
