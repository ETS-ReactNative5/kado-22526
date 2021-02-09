import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Storage from '../lib/requests/storage';
import {HowWorkScreenCompany, HowWorkScreenStudent} from '../Screen';
import {white} from '../utils/Theme/Color';


const HowWorkContainer = props => {
  const [user_group, setUser_group] = useState('');
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const navigate = async routeName => {
    const {navigation} = props;
    await navigation.navigate(routeName);
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
      {user_group === 'company' ? (
        <HowWorkScreenCompany goBack={goBack} />
      ) : (
        <HowWorkScreenStudent goBack={goBack} />
      )}
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default HowWorkContainer;
