import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScaledSheet} from 'react-native-size-matters';
import {MessageCard} from '../components';
import {
  blackColorText,
  lightGrayColor,
  placeHolderColor,
  buttonColor,
} from '../utils/Theme/Color';
import {BackArrow, SearchIcon} from '../assets/Image';

const MessageScreen = ({
  goBack,
  navigate,
  threads: data,
  onSearch,
  resetMessages,
  isloading,
  ...rest
}) => {
  const renderItem = ({item}) => (
    <MessageCard
      positon={item.position}
      image={item.image}
      title={item.title}
      desc={item.desc}
      navigate={navigate}
      timeSince={item.time_since || 'Yesterday'}
      threadId={item.id}
      {...rest}
    />
  );

  return (
    <View style={styles.conainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={goBack} style={{padding: 10}}>
          <BackArrow />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerText}>Messages</Text>
        </View>

        <View style={{width: 35}}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              resetMessages();
              navigate('Chat');
            }}>
            <Icon name="plus" color={buttonColor} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.searchContainer}>
          <SearchIcon />
          <TextInput
            placeholderTextColor={placeHolderColor}
            style={styles.input}
            placeholder="Search messages..."
            onChangeText={e => {
              onSearch(e);
            }}
          />
        </View>
      </View>

      <ScrollView>
        {isloading && data?.results.length === 0 ? (
          <View style={styles.empty}>
            <ActivityIndicator color={buttonColor} />
          </View>
        ) : null}
        {data?.results.length === 0 && !isloading ? (
          <View style={styles.empty}>
            <Text style={styles.emptytext}>No messages</Text>
          </View>
        ) : (
          <View />
        )}
        {data?.results.length !== 0 ? (
          <View style={{flex: 1}}>
            <FlatList renderItem={renderItem} data={data.results} />
            <Text style={styles.feedMessage}>
              This is the end of your messages feed! 🎉
            </Text>
            <View />
          </View>
        ) : null}
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10@s',
  },
  headerText: {
    fontSize: '16@s',
    lineHeight: '24@s',
    marginTop: '4@s',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20@s',
    width: '20@s',
    borderRadius: '100@s',
    borderWidth: 2,
    borderColor: buttonColor,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100@s',
    paddingTop: '80@s',
  },
});

export default MessageScreen;
