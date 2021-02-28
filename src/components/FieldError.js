import React from 'react';
import {Text, StyleSheet} from 'react-native';

const FieldError = ({errors, field, dirty}) => {
  if ( field in errors) {
    return <Text style={styles.errorText}>{errors[field]}</Text>;
  }
  return null;
};
const styles = StyleSheet.create({
  errorText: {
    color: 'red',
  },
});
export default FieldError;
