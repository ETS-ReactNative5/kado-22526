import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Storage from '../lib/requests/storage';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {ExploreScreen} from '../Screen';
import {white} from '../utils/Theme/Color';

const ExploreContainer = props => {
  const [user_groups, setUser_group] = useState('');
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };
  const navigate = async routeName => {
    const {navigation} = props;
    if (routeName === 'drawer') {
      navigation.openDrawer();
    } else {
      await navigation.navigate(routeName);
    }
  };

  useEffect(() => {
    Storage.retrieveData('access_token').then(items => {
      items?.user_groups.map(item => {
        setUser_group(item);
      });
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ExploreScreen
        user_groups={user_groups}
        navigate={navigate}
        goBack={goBack}
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

export default ExploreContainer;
