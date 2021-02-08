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
import {ScaledSheet} from 'react-native-size-matters';
import {
  lightBlackColor,
  themeColor,
  white,
  lightGrayBack,
  buttonColor,
  lightBlue,
  aliceGrey,
  fadeBlue,
} from '../utils/Theme/Color';
import primary from '../assets/Image/primary.png';
import {GiftedChat} from 'react-native-gifted-chat';
import {BackArrow} from '../assets/Image';
const NewMessageScreen = ({goBack}) => {
  const [messages, setMessages] = useState([]);
  const [customMessage, setCustomMessage] = useState('');
  const [textfield, setTextField] = useState('');
  useEffect(() => {
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
          {/* <Icon size={18} color={buttonColor} name="arrow-left" /> */}
          <BackArrow />
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            style={styles.leftContainer}
            onPress={() => goBack()}>
            <Text style={{color: buttonColor, fontSize: 18}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{padding: 10, flex: 1}}>
        <View>
          <View style={styles.filterHeaderWrapper}>
            <Text style={styles.filterHeadingText}>New Message</Text>
          </View>
          <View style={styles.filterWrapper}>
            <View style={styles.filterRow}>
              <View>
                <Text style={{color: aliceGrey, fontSize: 18}}>To:</Text>
              </View>
              <View style={{alignSelf: 'flex-start'}}>
                <TextInput
                  style={{width: '90%'}}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <Icon name="paperclip" color={fadeBlue} size={22} />
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
  filterHeaderWrapper: {padding: 12, marginBottom: 12},
  filterHeadingText: {fontSize: 18, textAlign: 'center', fontWeight: '400'},
  filterRow: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  filterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: lightBlue,
    borderTopWidth: 1,
    borderBottomColor: lightBlue,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    padding: 8,
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
