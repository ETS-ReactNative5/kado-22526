import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {addFavoriteJob, getJob} from '../../actions/jobs';
import PostViewScreen from '../../Screen/Post/PostViewScreen';
import {buttonColor} from '../../utils/Theme/Color';

const PostViewContainer = props => {
  const dispatch = useDispatch();

  const {job, isloading} = useSelector(store => store.jobs);

  const {
    route: {params},
  } = props;

  const handleSubmit = () => {
    dispatch(addFavoriteJob(params?.id, {title: job?.title, apply: true}));
  };

  useEffect(() => {
    if (params) {
      dispatch(getJob(params?.id));
    }
  }, []);

  if (isloading) {
    <View style={{}}>
      <ActivityIndicator color={buttonColor} />
    </View>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <PostViewScreen
        handleSubmit={handleSubmit}
        loading={isloading}
        data={job}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default PostViewContainer;
