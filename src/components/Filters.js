import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {textBlackColor, themeColor} from '../utils/Theme/Color';

const Filters = ({title, refRBSheet}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <View style={styles.textContainer}>
            <Text style={styles.buttonsText}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  Container: {
    color: '#E5E5E5',
    paddingLeft: '7@s',
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  filterText: {
    fontFamily: 'SF Pro Display',
    fontSize: '14@s',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20@s',
    letterSpacing: '1@s',
    textAlign: 'left',
    color: themeColor,
    marginBottom: '2@s',
  },

  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textContainer: {
    marginBottom: '7@s',
    padding: '4@s',
    paddingRight: '6@s',
    paddingLeft: '6@s',
    color: textBlackColor,
    borderWidth: 1,
    borderColor: '#E1E4F6',
    borderRadius: '8@s',
  },
  buttonsText: {
    fontFamily: 'SF Pro Display',
    fontSize: '15@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '18@s',
    letterSpacing: '1@s',
    textAlign: 'left',
    marginRight: '5@s',
  },
});

export default Filters;
