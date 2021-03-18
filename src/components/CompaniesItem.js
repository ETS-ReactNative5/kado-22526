import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {InfoIcon} from '../assets/Image';
import {themeColor} from '../utils/Theme/Color';
import {ImageView} from '../components';

const CompaniesItem = ({title, image, navigate, subtitle, id}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('CompanyProfile', {id, title})}>
      <View style={styles.leftContainer}>
        {image ? (
          <ImageView
            resizeMode="center"
            resizeMethod="resize"
            source={{uri: image}}
            style={styles.image}
          />
        ) : (
          <View style={{paddingRight: 42}} />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{title}</Text>
          <Text style={styles.subHeading}>{subtitle}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigate('CompanyProfile', {id, title})}
          style={styles.infoContainer}>
          <InfoIcon />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    borderTopColor: '#F2F1F8',
    borderTopWidth: 1,
    padding: '15@s',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: '32@s',
    width: '32@s',

    borderRadius: '60@s',
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: '10@s',
  },
  heading: {
    fontSize: '13@s',
    lineHeight: '16@s',
    color: themeColor,

    fontWeight: 'bold',
  },
  subHeading: {
    color: '#817F9B',
    fontSize: '11@s',
    lineHeight: '13@s',
    textTransform: 'capitalize',
  },
});

export default CompaniesItem;
