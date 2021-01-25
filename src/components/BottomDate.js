import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {ScaledSheet} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native';
import {buttonColor, feedItemBack, themeColor} from '../utils/Theme/Color';
import {TextInput} from 'react-native';

const BottomDate = ({title, placeholder, refRBSheet}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor="rgba(41, 41, 41, 0.2)"
            style={styles.input}
            placeholder={placeholder}
          />
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingRight: '15@s',
    paddingLeft: '15@s',
    borderBottomColor: feedItemBack,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: '15@s',
    lineHeight: '18@s',
    color: themeColor,
    fontWeight: 'bold',
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    width: '30%',
  },
  inputContainer: {
    width: '50%',
  },
  input: {
    fontSize: '15@s',
    lineHeight: '18@s',
    color: themeColor,
    fontWeight: 'bold',
  },
});

export default BottomDate;
