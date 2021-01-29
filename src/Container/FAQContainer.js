import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {FAQScreen} from '../Screen';
import {white} from '../utils/Theme/Color';

import {fetchAllFaq, addFaq, fetchFaq} from '../actions/faq';

const FAQContainer = props => {
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const {faqList, isloading} = useSelector(state => state.faq);
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const navigate = async routeName => {
    const {navigation} = props;
    await navigation.navigate(routeName);
  };

  useEffect(() => {
    console.log('salman');
    dispatch(fetchFaq());
  }, []);

  useEffect(() => {
    dispatch(fetchAllFaq());
  }, [update]);

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitFaq = () => {
    setUpdate(!update);
    dispatch(addFaq(data));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FAQScreen
        handleChange={handleChange}
        faqList={faqList}
        navigate={navigate}
        goBack={goBack}
        submitFaq={submitFaq}
        isloading={isloading}
        dispatch={dispatch}
        fetchAllFaq={fetchAllFaq}
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
