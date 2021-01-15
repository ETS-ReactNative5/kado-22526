import React from 'react';
import {View, Text, TextInput, FlatList, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScaledSheet} from 'react-native-size-matters';
import {BackHeader, MessageCard} from '../Components';
import userImage from '../assets/Image/userImage.png';
import userImageTwo from '../assets/Image/userImageTwo.png';
import userImageThre from '../assets/Image/userImageThre.png';
import {
  blackColorText,
  grayColor,
  lightGrayColor,
  placeHolderColor,
  themeColor,
} from '../utils/Theme/Color';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Theresa Webb',
    image: userImage,
    position: 'Wordpress Long-term dev',
    desc:
      'Theresa, there are some important things I need to discuss with you! Please ping me ASAP so I can set a meeting with you, I really need to get over those topics.',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Jane Cooper',
    image: userImageTwo,
    position: 'Wordpress Long-term dev',
    desc: 'Hello!',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Albert Flores',
    image: userImageThre,
    position: 'Wordpress Long-term dev',
    desc: 'It was a pleasure to meet you!',
  },
  {
    id: '58694-3da1-471f-bd96-145571e29d72',
    title: 'Albert Flores',
    image: userImageThre,
    position: 'Wordpress Long-term dev',
    desc: 'It was a pleasure to meet you!',
  },
  {
    id: '5869f-3da1-471f-bd96-145571e29d72',
    title: 'Albert Flores',
    image: userImageThre,
    position: 'Wordpress Long-term dev',
    desc: 'It was a pleasure to meet you!',
  },
  {
    id: '58694a0f1-471f-bd96-145571e29d72',
    title: 'Albert Flores',
    image: userImageThre,
    position: 'Wordpress Long-term dev',
    desc: 'It was a pleasure to meet you!',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Albert Flores',
    image: userImageThre,
    position: 'Wordpress Long-term dev',
    desc: 'It was a pleasure to meet you!',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Albert Flores',
    image: userImageThre,
    position: 'Wordpress Long-term dev',
    desc: 'It was a pleasure to meet you!',
  },
  {
    id: '58694a0f-3da1-471f145571e29d72',
    title: 'Albert Flores',
    image: userImageThre,
    position: 'Wordpress Long-term dev',
    desc: 'It was a pleasure to meet you!',
  },
  {
    id: '58694a0f-3145571e29d72',
    title: 'Albert Flores',
    image: userImageThre,
    position: 'Wordpress Long-term dev',
    desc: 'It was a pleasure to meet you!',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Albert Flores',
    image: userImageThre,
    position: 'Wordpress Long-term dev',
    desc: 'It was a pleasure to meet you!',
  },
  {
    id: '58694a0f-3da1-471f-bd9',
    title: 'Salman saleem',
    image: userImageThre,
    position: 'Wordpress Long-term dev',
    desc: 'It was a pleasure to meet you!',
  },
];

const MessageScreen = ({goBack}) => {
  const renderItem = ({item}) => (
    <MessageCard
      positon={item.position}
      image={item.image}
      title={item.title}
      desc={item.desc}
    />
  );
  return (
    <View style={styles.conainer}>
      <BackHeader goBack={goBack} title="Messages" />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.searchContainer}>
            <Icon size={16} name="search" color={themeColor} />
            <TextInput
              placeholderTextColor={placeHolderColor}
              style={styles.input}
              placeholder="Search messages..."
            />
          </View>
        </View>
        <View style={{flex: 1}}>
          <FlatList renderItem={renderItem} data={DATA} />
          <Text style={styles.feedMessage}>
            This is the end of your messages feed! 🎉
          </Text>
          <View />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  conainer: {
    flex: 1,
  },
  body: {
    padding: '10@s',
    paddingLeft: '20@s',
    paddingRight: '20@s',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: lightGrayColor,
    borderRadius: '8@s',
    paddingLeft: '15@s',
  },
  input: {
    marginLeft: '7@s',
    fontSize: '15@s',
    lineHeight: '18@s',
    color: blackColorText,
  },
  feedMessage: {
    textAlign: 'center',
    color: '#001CD6',
    fontSize: '10@s',
    lineHeight: '13@s',
    marginBottom: '20@s',
  },
});

export default MessageScreen;
