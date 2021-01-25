import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {ScaledSheet} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native';
import {
  buttonColor,
  feedItemBack,
  textBlackColor,
  themeColor,
} from '../utils/Theme/Color';

const SheetItems = ({title, refRBSheet}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => refRBSheet.current.close()}>
        <Text style={styles.text}>{title}</Text>
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
  },
  text: {
    fontSize: '15@s',
    lineHeight: '18@s',
    color: textBlackColor,
    fontWeight: 'bold',
  },
});

export default SheetItems;
