import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {NewsFeedScreen} from '../Screen';

const NewsFeedContainer = (props) => {
  const navigate = async (routeName) => {
    const {navigation} = props;
    if (routeName === 'drawer') {
      navigation.openDrawer();
    } else {
      await navigation.navigate(routeName);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <NewsFeedScreen navigate={navigate} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default NewsFeedContainer;
