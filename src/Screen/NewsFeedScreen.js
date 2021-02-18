import React, {useState} from 'react';
import {Tabs, Tab} from 'native-base';
import {View, Text, FlatList} from 'react-native';
import {FeedCard, FeedHeader, SearchBar, UserCards} from '../components';
import {
  blackColorText,
  buttonColor,
  textBlackColor,
  themeColor,
  white,
} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';
import {ActivityIndicator} from 'react-native';

const NewsFeedContainer = ({
  navigate,
  jobList,
  saveJobsList,
  isLoading,
  profileDetail,
  addFavorite,
  removeFavoriteJob,
  searchJobs,
  searchSavedJobs,
  dispatch,
  dispatchSaved,
  tokenLoading,
  user_group,
  studentsList,
  favStudentList,
  addStudentFav,
  removeStudentFav,
  fetchStudentsByName,
  fetchFavStudentsByName,
}) => {
  const [value, setValue] = useState(true);
  const renderItem = ({item}) => (
    <FeedCard
      title={item.title}
      description={item?.description}
      experience_level={item?.experience_level}
      skills={item?.skills}
      sent_at={item?.sent_at}
      time_frame={item?.time_frame}
      is_favorite={item?.is_favorite}
      addFavorite={addFavorite}
      removeFavoriteJob={removeFavoriteJob}
      id={item?.id}
    />
  );

  const savedRenderItem = ({item}) => (
    <FeedCard
      title={item.title}
      description={item?.description}
      experience_level={item?.experience_level}
      skills={item?.skills}
      is_favorite={item?.is_favorite}
      addFavorite={addFavorite}
      removeFavoriteJob={removeFavoriteJob}
      id={item?.id}
    />
  );

  const userCardRenderItem = ({item}) => (
    <UserCards
      bio={item?.bio}
      image={item?.photo}
      name={item?.fullname}
      tagline={item?.tagline}
      id={item?.id}
      favorite={false}
      addStudentFav={addStudentFav}
    />
  );

  const favStudentCard = ({item}) => (
    <UserCards
      bio={item?.bio}
      image={item?.photo}
      name={item?.fullname}
      tagline={item?.tagline}
      favorite={true}
      removeStudentFav={removeStudentFav}
      id={item?.id}
    />
  );
  return (
    <View style={styles.container}>
      <FeedHeader navigate={navigate} profileDetail={profileDetail} />
      <View style={styles.body}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.helloText}>Hello, </Text>
          <Text numberOfLines={1} style={styles.userName}>
            {profileDetail?.fullname}
          </Text>
        </View>

        <View>
          {user_group === 'company' ? (
            <View>
              {value ? (
                <SearchBar
                  onChangeText={value => dispatch(fetchStudentsByName(value))}
                  placeHolder="Search for talent"
                />
              ) : (
                <SearchBar
                  onChangeText={value =>
                    dispatch(fetchFavStudentsByName(value))
                  }
                  placeHolder="Search for talent"
                />
              )}
            </View>
          ) : (
            <View>
              {value ? (
                <SearchBar
                  onChangeText={value => dispatch(searchJobs(value))}
                  placeHolder="Search for your next jobs..."
                />
              ) : (
                <SearchBar
                  onChangeText={value => dispatch(searchSavedJobs(value))}
                  placeHolder="Search for your next jobs..."
                />
              )}
            </View>
          )}
        </View>

        <View style={styles.tabContainer}>
          <Tabs
            onChangeTab={({i}) => {
              if (i == 0) {
                setValue(true);
              }
              if (i == 1) {
                setValue(false);
              }
            }}
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
                <View style={styles.empty}>
                  <ActivityIndicator color={buttonColor} />
                </View>
              ) : (
                <View style={{flex: 1}}>
                  {user_group === 'company' ? (
                    <View style={{flex: 1}}>
                      {studentsList?.results?.length === 0 ? (
                        <View style={styles.empty}>
                          <Text style={styles.emptytext}>No students</Text>
                        </View>
                      ) : (
                        <FlatList
                          showsVerticalScrollIndicator={false}
                          renderItem={userCardRenderItem}
                          data={studentsList?.results}
                        />
                      )}
                    </View>
                  ) : (
                    <View style={{flex: 1}}>
                      {jobList?.length === 0 ? (
                        <View style={styles.empty}>
                          <Text style={styles.emptytext}>No Jobs</Text>
                        </View>
                      ) : (
                        <FlatList renderItem={renderItem} data={jobList} />
                      )}
                    </View>
                  )}
                </View>
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
                <View style={styles.empty}>
                  <ActivityIndicator color={buttonColor} />
                </View>
              ) : (
                <View style={{flex: 1}}>
                  {user_group === 'company' ? (
                    <View style={{flex: 1}}>
                      {favStudentList?.results?.length === 0 ? (
                        <View style={styles.empty}>
                          <Text style={styles.emptytext}>
                            No favourite students
                          </Text>
                        </View>
                      ) : (
                        <FlatList
                          renderItem={favStudentCard}
                          data={favStudentList?.results}
                        />
                      )}
                    </View>
                  ) : (
                    <View style={{flex: 1}}>
                      {saveJobsList?.length === 0 ? (
                        <View style={styles.empty}>
                          <Text style={styles.emptytext}>No Saved jobs</Text>
                        </View>
                      ) : (
                        <FlatList
                          renderItem={savedRenderItem}
                          data={saveJobsList}
                        />
                      )}
                    </View>
                  )}
                </View>
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
    textTransform: 'capitalize',
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
  emptytext: {
    color: blackColorText,
    fontSize: '16@s',
    lineHeight: '22@s',
    fontWeight: 'bold',
  },
});
export default NewsFeedContainer;
