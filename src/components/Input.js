import React from 'react';
import {Image, TextInput, TouchableOpacity, View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {ScaledSheet} from 'react-native-size-matters';

const Input = ({
  placeholder,
  iconShow,
  secureTextEntry,
  iconName,
  handlePassword,
  showPasswordData,
  handleConPassword,
  keyboardType,
  image,
  fromImage,
  onChange,
  value,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholderTextColor={'#999999'}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChange}
        defaultValue={value}
      />
      {iconShow ? (
        <TouchableOpacity
          onPress={showPasswordData ? handlePassword : handleConPassword}>
          {image ? (
            <Image source={fromImage} />
          ) : (
            <Icon name={iconName} size={18} />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = ScaledSheet.create({
  inputContainer: {
    backgroundColor: '#FAFAFA',
    paddingLeft: '15@s',
    borderColor: '#CBCBCB',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '10@s',
    marginTop: '10@s',
    borderRadius: '8@s',
  },
  input: {
    fontSize: '14@s',
    lineHeight: '18@s',
    width: '90%',
    padding: Platform.OS === 'ios' ? 10 : null,
    height: Platform.OS === 'ios' ? 40 : null,
  },
});

export default Input;
