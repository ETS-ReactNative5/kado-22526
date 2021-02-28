import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native';
import {textBlackColor} from '../utils/Theme/Color';

const SheetItems = ({title, refRBSheet, handleJobFilter, name, paramName}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          refRBSheet.current.close(), handleJobFilter(paramName, name);
        }}>
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
