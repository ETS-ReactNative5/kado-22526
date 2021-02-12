import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Storage from '../lib/requests/storage';
import {ScaledSheet} from 'react-native-size-matters';
import {
  lightBlackColor,
  themeColor,
  white,
  lightGrayBack,
  buttonColor,
  amountBorder,
} from '../utils/Theme/Color';
import primary from '../assets/Image/primary.png';
import {GiftedChat} from 'react-native-gifted-chat';
import {BackArrow} from '../assets/Image';
const NewMessageScreen = ({goBack}) => {
  const [messages, setMessages] = useState([]);
  const [customMessage, setCustomMessage] = useState('');
  const [user_group, setUser_group] = useState('');
  const [textfield, setTextField] = useState('');
  useEffect(() => {
    Storage.retrieveData('access_token').then(items => {
      items?.user_groups.map(item => {
        setUser_group(item);
      });
    });

    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const setChatArray = text => {
    const mss = {
      _id: 2,
      text: text,
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'Developer',
        avatar: 'https://placeimg.com/140/140/any',
      },
    };
    setCustomMessage(mss);
    setTextField(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{padding: 7}} onPress={() => goBack()}>
          <BackArrow />
        </TouchableOpacity>

        <View style={{alignContent: 'center'}}>
          <Text style={styles.filterHeadingText}>New Message</Text>
        </View>
        <View />
      </View>
      <View style={{padding: 10, flex: 1}}>
        <View>
          <View style={styles.filterWrapper}>
            <View style={styles.filterRow}>
              <View>
                <Text style={styles.atText}>@</Text>
              </View>
              <View style={styles.flexOne}>
                <TextInput
                  style={{height: 40, fontWeight: 'bold'}}
                  underlineColorAndroid="transparent"
                  placeholder={
                    user_group === 'company'
                      ? 'Candidate name...'
                      : 'Company name...'
                  }
                  placeholderTextColor={amountBorder}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <Icon name="paperclip" color={buttonColor} size={22} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.textInputWrapper}>
            <TextInput
              value={`${textfield}`}
              placeholder="Type your message..."
              style={styles.textInput}
              onChangeText={value => setChatArray(value)}
            />
            <TouchableOpacity
              onPress={() => {
                setMessages(previousMessages =>
                  GiftedChat.append(previousMessages, customMessage),
                ),
                  setTextField('');
              }}>
              <Image source={primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  flexOne: {flex: 1},
  filterHeaderWrapper: {padding: 12, marginBottom: 12},
  filterHeadingText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: themeColor,
  },
  filterRow: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: lightGrayBack,
    borderRadius: 12,
    padding: 0,
    marginRight: 25,
    width: '86%',
  },
  atText: {
    color: buttonColor,
    fontWeight: 'bold',
    fontSize: 18,
    padding: 0,
    marginLeft: 10,
    marginRight: 10,
  },
  filterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 8,
  },
  textInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    backgroundColor: lightGrayBack,
    borderTopColor: '#E8E8E8',
    borderTopWidth: 1,
    padding: 8,
    width: '83%',
    borderRadius: 5,
    marginRight: 22,
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: white,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    padding: '20@s',
    marginTop: '60@s',
  },
  text: {
    fontSize: '14@s',
    lineHeight: '16@s',
    marginTop: '4@s',
    textAlign: 'center',
    color: lightBlackColor,
  },

  heading: {
    fontSize: '18@s',
    lineHeight: '21@s',
    color: themeColor,
    fontWeight: 'bold',
    marginBottom: '20@s',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10@s',
    justifyContent: 'space-between',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '10@s',
    marginLeft: '10@s',
  },
  leftContainer: {
    flexDirection: 'row',
    marginRight: '10@s',
  },
  image: {
    height: '30@s',
    width: '30@s',
    borderRadius: '60@s',
  },
  headerText: {
    marginLeft: '10@s',
    fontSize: '16@s',
    lineHeight: '24@s',
    fontWeight: '600',
    color: themeColor,
    width: '200@s',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0,
    padding: 12,
  },
});

export default NewMessageScreen;
