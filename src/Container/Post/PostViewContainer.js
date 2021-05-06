import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {addFavoriteJob, getJob} from '../../actions/jobs';
import { AlertModal } from '../../components';
import PostViewScreen from '../../Screen/Post/PostViewScreen';
import {buttonColor} from '../../utils/Theme/Color';

const PostViewContainer = props => {
  const dispatch = useDispatch();

  const {job, isloading} = useSelector(store => store.jobs);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const {
    route: {params},
  } = props;

  const callbackFn = (response, success) => {
    setShowModal(true);
    if (success) {
      setAlertTitle("Success!");
      setAlertMessage("Thanks for sending your application!");
    } else {
      setAlertTitle("Failed!");
      setAlertMessage("Unable to send your application!");
    }
  };

  const handleSubmit = () => {

    dispatch(addFavoriteJob(params?.id, {title: job?.title, apply: true}, callbackFn));
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
      <AlertModal
        title={alertTitle}
        message={alertMessage}
        showModal={showModal}
        setShowModal={setShowModal}
      />

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
