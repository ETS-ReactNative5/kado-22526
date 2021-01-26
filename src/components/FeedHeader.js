import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import comment from '../assets/Image/comment.png';
import user from '../assets/Image/userImageTwo.png';
import {ScaledSheet} from 'react-native-size-matters';
import {buttonColor, themeColor} from '../utils/Theme/Color';

const FeedHeader = ({navigate, rightBtns}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('drawer')}>
        <Icon name="bars" color={buttonColor} size={20} />
      </TouchableOpacity>
      {rightBtns ? null : (
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => navigate('Message')}>
            <Image source={comment} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.image} source={user} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    padding: '10@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    height: '34@s',
    width: '34@s',
    borderRadius: '8@s',
    marginLeft: '20@s',
  },
});

export default FeedHeader;
