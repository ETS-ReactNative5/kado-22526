import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TimeAgo from 'react-native-timeago';
import {ScaledSheet} from 'react-native-size-matters';
import {
  blackColorText,
  buttonColor,
  feedItemBack,
  grayColor,
  lightBlackColor,
  themeColor,
} from '../utils/Theme/Color';
import {FeedButton} from './index';
import {useNavigation} from '@react-navigation/native';

const FeedCard = ({
  title,
  description,
  experience_level,
  skills,
  sent_at,
  time_frame,
  is_favorite,
  addFavorite,
  id,
  removeFavoriteJob,
}) => {
  const navigation = useNavigation();
  const [stateFavorite, setFavorite] = React.useState(is_favorite);
  const renderItem = ({item}) => <FeedButton title={item} />;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            console.warn('hello world');
            navigation.navigate('PostView', {id, title});
          }}>
          <Text numberOfLines={1} style={styles.heading}>
            {title}
          </Text>
          <Text style={styles.postColor}>
            Posted {<TimeAgo time={sent_at} />}
          </Text>
        </TouchableOpacity>
        <View style={styles.heartContaine}>
          {is_favorite ? (
            <TouchableOpacity
              onPress={() => {
                removeFavoriteJob(id);
                setFavorite(!stateFavorite);
              }}>
              <Icon
                color={buttonColor}
                solid={stateFavorite}
                size={18}
                name="heart"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                addFavorite(id);
                setFavorite(!stateFavorite);
              }}>
              <Icon
                color={buttonColor}
                solid={stateFavorite}
                size={18}
                name="heart"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.descContainer}>
        <Text>{description}</Text>
      </View>
      <View style={styles.monthContainer}>
        <View>
          <Text style={styles.monthHeading}>{experience_level}</Text>
          <Text style={styles.monthText}>Experience Level</Text>
        </View>
        <View>
          <Text style={styles.monthHeading}>{time_frame}</Text>
          <Text style={styles.monthText}>Time Frame</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          horizontal={true}
          renderItem={renderItem}
          data={skills?.split(';')}
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
    alignItems: 'center',
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
  heading: {
    color: lightBlackColor,
    fontSize: '13@s',
    lineHeight: '16@s',
    fontWeight: 'bold',
    width: '250@s',
  },
  postColor: {
    color: grayColor,
    fontSize: '11@s',
    lineHeight: '13@s',
    marginTop: '5@s',
  },
  descContainer: {
    marginTop: '20@s',
    marginBottom: '20@s',
    fontSize: '11@s',
    lineHeight: '14@s',
    color: blackColorText,
  },
  monthContainer: {
    width: '75%',

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
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default FeedCard;
