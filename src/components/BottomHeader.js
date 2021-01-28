import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {ScaledSheet} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native';
import {buttonColor, feedItemBack, themeColor} from '../utils/Theme/Color';

const BottomHeader = ({
  title,
  refRBSheet,
  click,
  handleJobFilter,
  data,
  handleAmountFilter,
  min_data,
  max_data,
  dateClick,
  handleDateFilter,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => refRBSheet.current.close()}>
        <Icon name="clear" size={24} color={buttonColor} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      {dateClick ? (
        <TouchableOpacity
          onPress={() => {
            refRBSheet.current.close(),
              handleDateFilter(data?.start_date, data?.end_date);
          }}>
          <Icon name="done" size={24} color={buttonColor} />
        </TouchableOpacity>
      ) : (
        <View>
          {click ? (
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.close(), handleJobFilter('location', data);
              }}>
              <Icon name="done" size={24} color={buttonColor} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.close(),
                  handleAmountFilter(min_data, max_data);
              }}>
              <Icon name="done" size={24} color={buttonColor} />
            </TouchableOpacity>
          )}
        </View>
      )}
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
