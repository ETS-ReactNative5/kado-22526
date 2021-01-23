import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import NewMessageScreen from '../Screen/NewMessageScreen';

const NewMessageContainer = props => {
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <NewMessageScreen goBack={goBack} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default NewMessageContainer;
