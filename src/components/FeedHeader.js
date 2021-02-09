import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import user from '../assets/Image/userImageTwo.png';
import {ScaledSheet} from 'react-native-size-matters';
import {DrawerIcon, MessageIcon} from '../assets/Image';
import Storage from '../lib/requests/storage';

const FeedHeader = ({navigate, rightBtns}) => {
  const [user_group, setUser_group] = useState('');
  useEffect(() => {
    Storage.retrieveData('access_token').then(items => {
      items?.user_groups.map(item => {
        setUser_group(item);
      });
    });
  }, []);
  const goToProfile = () => {
    navigate(user_group === 'student' ? 'EditProfile' : 'EditCompanyProfile');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.drawerIconContainer}
        onPress={() => navigate('drawer')}>
        <DrawerIcon />
      </TouchableOpacity>
      {rightBtns ? null : (
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => navigate('Message')}>
            <MessageIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToProfile}>
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
  drawerIconContainer: {
    padding: '5@s',
  },
});

export default FeedHeader;
