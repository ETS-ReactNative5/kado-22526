import React from 'react';
import {Text} from 'react-native';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScaledSheet} from 'react-native-size-matters';
import {
  addressColor,
  buttonColor,
  feedItemBack,
  paragraphColor,
  themeColor,
} from '../utils/Theme/Color';

import userImageTwo from '../assets/Image/userImageTwo.png';

const NotSignedCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Image source={userImageTwo} style={styles.image} />
          <View style={styles.nameContainer}>
            <Text numberOfLines={1} style={styles.heading}>
              Alena Snith Alena Snith Alena Snith Alena Snith Alena Snith
            </Text>
            <Text numberOfLines={1} style={styles.position}>
              Senior JS Developer
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.heartContaine}>
            <Icon color={buttonColor} size={18} name="heart" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.paragraphText} numberOfLines={2}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: feedItemBack,
    padding: '10@s',
    marginTop: '10@s',
    borderRadius: '10@s',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: '50@s',
    width: '50@s',

    borderRadius: '100@s',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    marginLeft: '10@s',
  },
  heading: {
    fontSize: '13@s',
    lineHeight: '16@s',
    color: themeColor,
    fontWeight: 'bold',
    width: '150@s',
  },
  position: {
    fontSize: '11@s',
    lineHeight: '13@s',
    color: addressColor,
    fontWeight: 'bold',
    width: '150@s',
  },
  heartContaine: {
    width: '32@s',
    height: '32@s',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  paragraph: {
    marginTop: '10@s',
  },
  paragraphText: {
    color: paragraphColor,
    fontSize: '11@s',
    lineHeight: '16@s',
    textAlign: 'justify',
  },
});

export default NotSignedCard;
