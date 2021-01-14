import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {EditProfileScreen} from '../Screen';

const EditProfileContainer = (props) => {
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const navigate = async (routeName) => {
    const {navigation} = props;
    await navigation.navigate(routeName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <EditProfileScreen navigate={navigate} goBack={goBack} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default EditProfileContainer;
