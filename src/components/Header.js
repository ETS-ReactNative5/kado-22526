import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {themeColor} from '../Utils/Theme/Color';

const Header = ({navigate}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate('drawer', '')}
      style={styles.container}>
      <Icon name="bars" color={themeColor} size={18} />
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    padding: '10@s',
  },
});

export default Header;
