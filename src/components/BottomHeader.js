import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {ScaledSheet} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native';
import {buttonColor, feedItemBack, themeColor} from '../utils/Theme/Color';

const RightIconDate = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="done" size={24} color={buttonColor} />
    </TouchableOpacity>
  );
};

const RightIconFilter = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="done" size={24} color={buttonColor} />
    </TouchableOpacity>
  );
};
const RightIcon = ({
  dateClick,
  refRBSheet,
  handleAmountFilter,
  handleJobFilter,
  handleDateFilter,
  min_data,
  max_data,
  click,
  data,
}) => {
  return (
    <>
      {dateClick ? (
        <RightIconDate
          onPress={() => {
            refRBSheet.current.close();
            handleDateFilter(data?.start_date, data?.end_date);
          }}
        />
      ) : (
        <View>
          {click ? (
            <RightIconFilter
              refRBSheet={refRBSheet}
              onPress={() => {
                refRBSheet.current.close();
                handleJobFilter('location', data);
              }}
            />
          ) : (
            <RightIconFilter
              refRBSheet={refRBSheet}
              onPress={() => {
                refRBSheet.current.close();

                handleAmountFilter(min_data, max_data);
              }}
            />
          )}
        </View>
      )}
    </>
  );
};
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
  hideCheckIcon,
}) => {
  const rest = {
    refRBSheet,
    click,
    handleJobFilter,
    data,
    handleAmountFilter,
    min_data,
    max_data,
    dateClick,
    handleDateFilter,
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => refRBSheet.current.close()}>
        <Icon name="clear" size={24} color={buttonColor} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      {!hideCheckIcon ? (
        <RightIcon {...rest} />
      ) : (
        <View>
          <Icon name="clear" size={24} color={'transparent'} />
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
