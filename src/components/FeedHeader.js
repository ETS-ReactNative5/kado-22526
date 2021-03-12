import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {DrawerIcon, MessageIcon} from '../assets/Image';
import MainLogo from '../assets/Image/MainLogo';
import {KadoContext} from '../context/KadoProvider';

const FeedHeader = ({rightBtns, profileDetail, image = false}) => {
  const navigation = useNavigation();
  const {userGroup} = React.useContext(KadoContext);

  const goToProfile = () => {
    navigation.navigate(
      userGroup === 'student' ? 'StudentProfile' : 'CompanyProfile',
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.drawerIconContainer}
        onPress={() => navigation.openDrawer()}>
        <DrawerIcon />
      </TouchableOpacity>
      {image ? (
        <View>
          <MainLogo />
        </View>
      ) : null}
      {image ? <View /> : null}
      {rightBtns ? null : (
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Message')}>
            <MessageIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToProfile}>
            <Image
              style={styles.image}
              source={{uri: profileDetail?.photo || ''}}
            />
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
