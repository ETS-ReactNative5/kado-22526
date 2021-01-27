import React from 'react';
import {Tabs, Tab} from 'native-base';
import {View, Text, TextInput, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FeedCard, FeedHeader, SearchBar} from '../components';
import {
  blackColorText,
  buttonColor,
  lightBlackColor,
  lightGray,
  textBlackColor,
  themeColor,
  white,
} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';
import {ActivityIndicator} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const NewsFeedContainer = ({navigate, jobList, saveJobsList, isLoading}) => {
  console.log('jobs', jobList);
  const renderItem = ({item}) => (
    <FeedCard
      title={item.title}
      description={item?.description}
      experience_level={item?.experience_level}
      skills={item?.skills}
    />
  );

  const savedRenderItem = ({item}) => (
    <FeedCard
      title={item.title}
      description={item?.description}
      experience_level={item?.experience_level}
      skills={item?.skills}
    />
  );

  return (
    <View style={styles.container}>
      <FeedHeader navigate={navigate} />
      <View style={styles.body}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.helloText}>Hello, </Text>
          <Text numberOfLines={1} style={styles.userName}>
            Dan Smith
          </Text>
        </View>

        <SearchBar placeHolder="Search for your next jobs..." />

        <View style={styles.tabContainer}>
          <Tabs
            locked={true}
            tabBarUnderlineStyle={{backgroundColor: buttonColor}}>
            <Tab
              tabStyle={{backgroundColor: white}}
              activeTabStyle={{backgroundColor: white}}
              activeTextStyle={{
                color: textBlackColor,
                fontWeight: 'bold',
                fontSize: 15,
                lineHeight: 18,
              }}
              textStyle={{color: '#8E8E8E'}}
              heading="Feed">
              {isLoading ? (
                <View>
                  <ActivityIndicator />
                </View>
              ) : jobList?.length === 0 ? (
                <Text>No jobs</Text>
              ) : (
                <FlatList renderItem={renderItem} data={jobList} />
              )}
            </Tab>
            <Tab
              tabStyle={{backgroundColor: white}}
              activeTabStyle={{backgroundColor: white}}
              activeTextStyle={{
                color: textBlackColor,
                fontWeight: 'bold',
                fontSize: 15,
                lineHeight: 18,
              }}
              textStyle={{color: '#8E8E8E'}}
              heading="Saved">
              {isLoading ? (
                <View>
                  <ActivityIndicator />
                </View>
              ) : saveJobsList?.length === 0 ? (
                <View style={styles.empty}>
                  <Text>No saved jobs</Text>
                </View>
              ) : (
                <FlatList renderItem={renderItem} data={saveJobsList} />
              )}
            </Tab>
          </Tabs>
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  body: {
    flex: 1,
    padding: '10@s',
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20@s',
  },
  helloText: {
    fontSize: '32@s',
    lineHeight: '43@s',
    color: themeColor,
  },
  userName: {
    fontSize: '32@s',
    lineHeight: '43@s',
    color: themeColor,
    fontWeight: 'bold',
    width: '65%',
  },

  tabContainer: {
    flex: 1,
    marginTop: '20@s',
  },

  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default NewsFeedContainer;
