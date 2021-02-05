import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import userImageTwo from '../assets/Image/userImageTwo.png';
import {ScaledSheet} from 'react-native-size-matters';
import {buttonColor, feedItemBack, themeColor} from '../utils/Theme/Color';

const UserCards = ({}) => {
  // const myItem = return ()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <Image source={userImageTwo} style={styles.image} />
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.heading}>
              Alena Smith Alena Smith Alena Smith Alena SmithAlena Smith
            </Text>
            <Text style={styles.position}>Senior Js Developer</Text>
          </View>
        </View>
        <View>
          <View style={styles.heartContaine}>
            <TouchableOpacity>
              <Icon color={buttonColor} size={18} name="heart" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraph} numberOfLines={2}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit...
        </Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: feedItemBack,
    padding: '10@s',
    borderRadius: '10@s',
    marginTop: '10@s',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: '50@s',
    width: '50@s',
    borderRadius: '100@s',
    marginRight: '10@s',
  },
  heading: {
    color: themeColor,
    fontSize: '13@s',
    lineHeight: '16@s',
    fontWeight: 'bold',
    width: '200@s',
  },
  textContainer: {
    marginBottom: '10@s',
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
  position: {
    color: '#817F9B',
    fontSize: '11@s',
    lineHeight: '13@s',
  },
  paragraphContainer: {
    marginTop: '10@s',
  },
  paragraph: {
    color: '#424069',
    fontSize: '11@s',
    lineHeight: '14@s',
  },
});

export default UserCards;
