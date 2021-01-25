import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {ScaledSheet} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native';
import {buttonColor, feedItemBack, themeColor} from '../utils/Theme/Color';

const BottomHeader = ({title, refRBSheet}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => refRBSheet.current.close()}>
        <Icon name="clear" size={24} color={buttonColor} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity onPress={() => refRBSheet.current.close()}>
        <Icon name="done" size={24} color={buttonColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15@s',
    borderBottomColor: feedItemBack,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: '15@s',
    lineHeight: '18@s',
    color: themeColor,
    fontWeight: 'bold',
  },
});

export default BottomHeader;
