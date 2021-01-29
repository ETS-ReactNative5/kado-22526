import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, TextInput} from 'react-native';
import {blackColorText, buttonColor, lightGray} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';
import {SearchIcon} from '../assets/Image';

const SearchBar = ({placeHolder, onChangeText}) => {
  return (
    <View style={styles.searchHeader}>
      <View style={styles.searchContainer}>
        <View style={styles.searchIconContainer}>
          <SearchIcon />
        </View>

        <TextInput
          placeholder={placeHolder}
          style={styles.input}
          placeholderTextColor="#8E8E8E"
          onChangeText={onChangeText}
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
    padding: '5@s',
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
