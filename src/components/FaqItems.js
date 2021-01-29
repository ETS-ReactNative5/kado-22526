import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
const Faqitems = ({title}) => {
  return (
    <TouchableOpacity style={styles.borderContainer}>
      <Text style={styles.differneceText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  borderContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#F2F1F8',
    padding: '15@s',
  },
  differneceText: {
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '15@s',
    textAlign: 'left',
    color: '#030037',
  },
});
export default Faqitems;
