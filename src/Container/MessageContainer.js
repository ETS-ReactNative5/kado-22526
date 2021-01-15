import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {MessageScreen} from '../Screen';
import {white} from '../utils/Theme/Color';

const MessageContainer = props => {
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.contianer}>
      <MessageScreen goBack={goBack} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: white,
  },
});

export default MessageContainer;
