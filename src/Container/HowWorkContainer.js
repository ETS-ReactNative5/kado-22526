import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {HowWorkScreenCompany, HowWorkScreenStudent} from '../Screen';
import {white} from '../utils/Theme/Color';
import {KadoContext} from '../context/KadoProvider';

const HowWorkContainer = props => {
  const {userGroup} = React.useContext(KadoContext);
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const navigate = async routeName => {
    const {navigation} = props;
    await navigation.navigate(routeName);
  };

  return (
    <SafeAreaView style={styles.container}>
      {userGroup === 'company' ? (
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
