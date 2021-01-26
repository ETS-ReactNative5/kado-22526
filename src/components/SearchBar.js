import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, TextInput} from 'react-native';
import {blackColorText, buttonColor, lightGray} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';

const SearchBar = ({placeHolder}) => {
  return (
    <View style={styles.searchHeader}>
      <View style={styles.searchContainer}>
        <View style={styles.searchIconContainer}>
          <Icon name="search" size={20} color={buttonColor} />
        </View>

        <TextInput
          placeholder={placeHolder}
          style={styles.input}
          placeholderTextColor="#8E8E8E"
        />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: lightGray,
    padding: '10@s',
    borderRadius: '7@s',
  },
  searchIconContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 0,
    lineHeight: '18@s',
    fontSize: '15@s',
    color: blackColorText,
    paddingRight: '15@s',
  },
});

export default SearchBar;
