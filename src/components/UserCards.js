import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import userImageTwo from '../assets/Image/userImageTwo.png';
import {ScaledSheet} from 'react-native-size-matters';
import {buttonColor, feedItemBack, themeColor, blackColorText} from '../utils/Theme/Color';
import {useNavigation} from '@react-navigation/native';
import {ImageView} from '../components';
import {FeedButton} from './index';

const UserCards = ({
  bio,
  image,
  name,
  tagline,
  id,
  skills,
  hourly_pay,
  availability,
  addStudentFav,
  removeStudentFav,
  favorite,
}) => {
  const navigation = useNavigation();
  const [stateFavorite, setFavorite] = useState(favorite);
  const renderItem = ({item}) => <FeedButton title={item} />;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerProfileImage}
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
        <View style={styles.heartSection}>
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
      <View style={styles.monthContainer}>
        <View>
          <Text style={styles.monthHeading}>{ hourly_pay }</Text>
          <Text style={styles.monthText}>Hourly Pay</Text>
        </View>
        <View>
          <Text style={styles.monthHeading}>{availability}</Text>
          <Text style={styles.monthText}>Availability</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          horizontal={true}
          renderItem={renderItem}
          data={skills}
        />
        {/* <FeedButton title="Website Redesign" />
        <FeedButton title="Website Development" /> */}
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
    flex: 1,
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
  headerProfileImage: {
    flex: 12,
  },
  heartSection: {
    flex: 2,
    alignItems: 'flex-end'
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
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthContainer: {
    width: '75%',
    marginTop: '14@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  monthHeading: {
    color: buttonColor,
    fontSize: '11@s',
    lineHeight: '13@s',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  monthText: {
    color: blackColorText,
    fontSize: '11@s',
    lineHeight: '13@s',
  },
});

export default UserCards;
