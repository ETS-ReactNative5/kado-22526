import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {resetPassword} from '../actions/auth';
import {AlertModal} from '../components';
import {Toast} from '../components/Toast';
import ForgotPasswordScreen from '../Screen/ForgotPasswordScreen';

const ForgotPasswordContainer = props => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const toastRef = useRef();

  const handleSubmit = values => {
    dispatch(resetPassword({...values}, callBackFn));
  };

  const callBackFn = (data, success) => {
    if (success) {
      toastRef.current.show(
        'Password reset successful. Please check your email.',
        '#fff',
        1000,
      );
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    } else {
      setShowModal(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Toast ref={toastRef} />
      <AlertModal
        title="Login Error"
        message="Sorry, the email you entered doesn't exist."
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <ForgotPasswordScreen isloading={false} handleSubmit={handleSubmit} />
    </SafeAreaView>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});
export default ForgotPasswordContainer;
