import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {LoginScreen} from '../Screen';
import {login} from '../actions/auth';
import {StackActions} from '@react-navigation/native';
import {AlertModal} from '../components';
import {KadoContext} from '../context/KadoProvider';

const LoginContainer = props => {
  const [showPassword, setShowPasssword] = useState(true);
  const [loginForm, setLogInForm] = useState({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const isloading = useSelector(state => state.auth.isLoading);
  const {setUserGroup} = React.useContext(KadoContext);

  const navigate = async routeName => {
    const {navigation} = props;
    if (routeName === 'drawer') {
      navigation.openDrawer();
    } else {
      await navigation.dispatch(StackActions.replace(routeName));
    }
  };

  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };
  const handlePassword = () => {
    setShowPasssword(!showPassword);
  };
  const handleChange = (name, value) => {
    setLogInForm({
      ...loginForm,
      [name]: value,
    });
  };
  const loginCallBackFn = (resp, showErrorModal) => {
    setShowModal(showErrorModal);
    resp && setUserGroup(resp?.user_groups[0]);
  };
  const handleSubmit = () => {
    dispatch(login(loginForm, navigate, loginCallBackFn));
  };

  return (
    <SafeAreaView style={styles.container}>
      <AlertModal
        title="Login Error"
        message="Sorry, the email or password you entered is incorrect. Please try again."
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <LoginScreen
        handlePassword={handlePassword}
        showPassword={showPassword}
        navigate={navigate}
        goBack={goBack}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isloading={isloading}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginContainer;
