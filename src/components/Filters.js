import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {textBlackColor} from '../utils/Theme/Color';
const Filters = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.filtersContainer}>
        <Text style={styles.filterText}>Filters:</Text>
        <TouchableOpacity>
          <Icon name="clear" size={22} color="#001CD6" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.buttonsText}>Category</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.buttonsText}>Type of project</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.buttonsText}>Date</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.buttonsText}>Location</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.buttonsText}>Payment</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  Container: {
    color: '#E5E5E5',
    padding: '7@s',
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
    color: '#030037',
    marginBottom: '2@s',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textContainer: {
    marginRight: '7@s',
    marginTop: '7@s',
    padding: '6@s',
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
