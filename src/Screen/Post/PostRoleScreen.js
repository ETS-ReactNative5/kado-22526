import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';
import {FeedHeader} from '../../components';

import {buttonColor, white} from '../../utils/Theme/Color';
import MainLogo from '../../assets/Image/MainLogo';

const PostRoleScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FeedHeader rightBtns={true} />
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <View style={styles.imageContainer}>
          <MainLogo />
          <Text style={styles.text}>
            Let talented students help you with your business
          </Text>
        </View>
        <View style={styles.body}>
          <TouchableOpacity
            style={styles.postBtnContainer}
            onPress={() => navigation.navigate('PostCategories')}>
            <Text style={styles.postText}>Post a role</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  bodyContainer: {
    paddingBottom: '40@s',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60@s',
  },
  text: {
    fontSize: '17@s',
    lineHeight: '20@s',
    color: buttonColor,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: '60@s',
    marginHorizontal: '30@s',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  postText: {
    color: white,
    fontSize: '14@s',
    lineHeight: '18@s',
    marginLeft: '5@s',
  },
  postBtnContainer: {
    padding: '10@s',
    backgroundColor: buttonColor,
    marginTop: '80@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '35@s',
  },
});

export default PostRoleScreen;
