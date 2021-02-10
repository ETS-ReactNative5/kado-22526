import React, { useState, useCallback, useEffect } from 'react';
import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScaledSheet } from 'react-native-size-matters';
import Bubble from 'react-native-gifted-chat/lib/Bubble';
import {
  grayColor,
  lightBlackColor,
  themeColor,
  white,
  lightGrayBack,
  chatBackColor,
  darkBlue,
  buttonColor,
} from '../utils/Theme/Color';
import { BackHeader } from '../components';
import primary from '../assets/Image/primary.png';
import chatUser from '../assets/Image/chatUser.png';
import { GiftedChat } from 'react-native-gifted-chat';
import { BackArrow } from '../assets/Image';
const ChatScreen = ({ goBack, sendMessage }) => {
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

  const customtInputToolbar = props => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextInput
          {...props}
          value={`${textfield}`}
          style={{
            backgroundColor: lightGrayBack,
            borderTopColor: '#E8E8E8',
            borderTopWidth: 1,
            padding: 8,
            width: '83%',
            borderRadius: 5,
          }}
          onChangeText={value => setChatArray(value)}
        />
        <TouchableOpacity
          onPress={() => {
            setMessages(previousMessages =>
              GiftedChat.append(previousMessages, customMessage),
            ),
            sendMessage(textfield);
                 setTextField('');
          }}>
          <Image source={primary} />
        </TouchableOpacity>
      </View>
    );
  };

  // const quickReply = () => {
  //   return (
  //     <View style={{ backgroundColor: 'red' }}>
  //       <Text>test</Text>
  //     </View>
  //   )
  // }

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: darkBlue,
          },
          left: {
            color: darkBlue,
          },
        }}
        wrapperStyle={{
          right: {
            backgroundColor: chatBackColor,
          },
          left: {
            backgroundColor: '#F7F7F9',
          },
        }}
      />
    );
  };

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{ padding: 7 }} onPress={() => goBack()}>
          {/* <Icon size={18} color={themeColor} name="arrow-left" /> */}
          <BackArrow />
        </TouchableOpacity>

        <View style={styles.rightContainer}>
          <Image style={styles.image} source={chatUser} />
          <Text numberOfLines={1} style={styles.headerText}>
            fahad
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.leftContainer}>
            <Icon name="paperclip" size={20} color={buttonColor} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ padding: 10, flex: 1 }}>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          textInputStyle={{
            backgroundColor: lightGrayBack,
            paddingLeft: 10,
            paddingRight: 10,
          }}
          renderInputToolbar={props => customtInputToolbar(props)}
          // renderMessageText={() => <View style={{ backgroundColor: 'red' }}></View>}
          // renderQuickReplySend={() => quickReply}
          // quickReplyStyle={{ backgroundColor: 'red' }}
          renderBubble={renderBubble}
          user={{
            _id: 1,
          }}
        />
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
});

export default ChatScreen;
