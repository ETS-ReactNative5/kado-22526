import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {FAQScreen} from '../Screen';
import {white} from '../utils/Theme/Color';
import {AlertModal} from '../components';
import {fetchAllFaq, addFaq, fetchFaq} from '../actions/faq';

const FAQContainer = props => {
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const {faqList, isloading, submitLoading} = useSelector(state => state.faq);
  
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const navigate = async routeName => {
    const {navigation} = props;
    await navigation.navigate(routeName);
  };

  useEffect(() => {
    dispatch(fetchFaq());
  }, []);

  useEffect(() => {
    dispatch(fetchFaq());
  }, [update]);

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const callbackFn = (response, success) => {
    console.log(success, response);
    setShowModal(true);
    if (success) {
      setAlertTitle("Success!");
      setAlertMessage("Your question have been submitted successfully.");
      setData({
        ...data,
        ['question']: '',
      });
    } else {
      setAlertTitle("Failed!");
      let message = <Text>Unable to submit your question.</Text>;
      if ('question' in  response) {
        let errors = response['question'];
        errors = errors.map(e => <Text>{e}</Text>);
        message = <>{errors}</>;
      }

      setAlertMessage(message);
    }
  }

  const submitFaq = () => {
    setUpdate(!update);
    dispatch(addFaq(data, callbackFn));
  };

  return (
    <SafeAreaView style={styles.container}>

      <AlertModal
        title={alertTitle}
        message={alertMessage}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      <FAQScreen
        handleChange={handleChange}
        faqList={faqList}
        navigate={navigate}
        goBack={goBack}
        submitFaq={submitFaq}
        isloading={isloading}
        dispatch={dispatch}
        fetchAllFaq={fetchAllFaq}
        submitLoading={submitLoading}
        data={data}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default FAQContainer;
