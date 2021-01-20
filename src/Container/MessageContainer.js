import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { MessageScreen } from '../Screen';
import { white } from '../utils/Theme/Color';

const MessageContainer = props => {

  const goBack = () => {
    const { navigation } = props;
    navigation.goBack();
  };

  const navigate = (route) => {
    const { navigation } = props;
    navigation.navigate(route);
  }

  return (
    <SafeAreaView style={styles.contianer}>
      <MessageScreen goBack={goBack} navigate={navigate} />
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