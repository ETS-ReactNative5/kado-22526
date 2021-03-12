import React from 'react';
import {Text, StyleSheet} from 'react-native';

const FieldError = ({errors, field, touched}) => {
  if (field in errors && field in touched) {
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
