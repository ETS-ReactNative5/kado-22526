import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import userImageTwo from '../assets/Image/userImageTwo.png';
import {ScaledSheet} from 'react-native-size-matters';
import {buttonColor, feedItemBack, themeColor} from '../utils/Theme/Color';
import {useNavigation} from '@react-navigation/native';
import {ImageView} from '../components';

const UserCards = ({
  bio,
  image,
  name,
  tagline,
  id,
  addStudentFav,
  removeStudentFav,
  favorite,
}) => {
  const navigation = useNavigation();
  const [stateFavorite, setFavorite] = useState(favorite);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('StudentProfile', {id, name, image})
          }>
          <View style={styles.leftContainer}>
            <ImageView
              source={{uri: image || undefined}}
              style={styles.image}
            />

            <View style={styles.textContainer}>
              <Text numberOfLines={1} style={styles.heading}>
                {name}
              </Text>
              {tagline === null ? (
                <Text style={styles.position}>No Position</Text>
              ) : (
                <Text style={styles.position}>{tagline}</Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
        <View>
          <View style={styles.heartContaine}>
            {favorite ? (
              <TouchableOpacity
                onPress={() => {
                  removeStudentFav(id);
                  setFavorite(!stateFavorite);
                }}>
                <Icon
                  solid={stateFavorite}
                  color={buttonColor}
                  size={18}
                  name="heart"
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  addStudentFav(id);
                  setFavorite(!stateFavorite);
                }}>
                <Icon
                  solid={stateFavorite}
                  color={buttonColor}
                  size={18}
                  name="heart"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <View style={styles.paragraphContainer}>
        {bio === null ? (
          <Text style={styles.paragraph} numberOfLines={2}>
            No description here
          </Text>
        ) : (
          <Text style={styles.paragraph} numberOfLines={2}>
            {bio}
          </Text>
        )}
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
