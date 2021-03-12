import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {ExploreScreen} from '../Screen';
import {white} from '../utils/Theme/Color';
import {KadoContext} from '../context/KadoProvider';

const ExploreContainer = props => {
  const {userGroup} = React.useContext(KadoContext);
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

  return (
    <SafeAreaView style={styles.container}>
      <ExploreScreen
        user_groups={userGroup}
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
