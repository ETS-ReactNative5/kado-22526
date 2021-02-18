import React, {useState, useCallback, useEffect} from 'react';
import {Text, TouchableOpacity, View, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScaledSheet} from 'react-native-size-matters';
import Bubble from 'react-native-gifted-chat/lib/Bubble';
import ImagePicker from 'react-native-image-picker';
import {
  lightBlackColor,
  themeColor,
  white,
  lightGrayBack,
  chatBackColor,
  darkBlue,
  buttonColor,
} from '../utils/Theme/Color';
import primary from '../assets/Image/primary.png';
import {GiftedChat} from 'react-native-gifted-chat';
import {BackArrow} from '../assets/Image';
import {WEBSOCKET_HOST} from '../lib/requests/api';
import Storage from '../lib/requests/storage';
import useWebSocket from 'react-use-websocket';
import DropDownPicker from '../components/DropdownPicker';
const ChatScreen = ({
  goBack,
  messages: remoteMessages,
  profileId: profileID,
  threadId: threadID,
  setSearchProfileValue,
  profiles,
  resetMessages,
}) => {
  const [messages, setMessages] = useState([]);
  const [customMessage, setCustomMessage] = useState('');
  const [textfield, setTextField] = useState('');
  const [threadId, setThreadId] = useState(threadID);
  const [socketUrl, setSocketUrl] = useState(
    `${WEBSOCKET_HOST}${threadId ? threadId : 0}/`,
  );
  const [profileId, setProfileId] = useState(profileID);
  const [token, setToken] = useState('');
  const [user_group, setUser_group] = useState('');

  const {sendMessage} = useWebSocket(socketUrl, {
    onMessage: e => {
      const message = JSON.parse(e.data);

      if (threadId === 0 || !threadId) {
        setThreadId(message.threadId);
        setSocketUrl(`${WEBSOCKET_HOST}${message.threadId}/?token=${token}`);
      }
      if (message?.user?._id !== profileId) {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, message),
        );
      }
      if (message.image) {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, message),
        );
      }
    },
  });
  useEffect(() => {
    if (!token) {
      Storage.retrieveData('access_token').then(resp => {
        setSocketUrl(`${socketUrl}?token=${resp.key}`);
        setToken(resp.key);
        setProfileId(resp?.profile_id);
        resp?.user_groups.map(item => {
          setUser_group(item);
        });
      });
    }
  }, []);
  useEffect(() => {
    if (messages.length !== remoteMessages.messages.length) {
      setMessages(remoteMessages.messages || []);
    }
  }, [remoteMessages]);

  const setChatArray = text => {
    if (!text) return;
    const mss = {
      _id: messages.length,
      text: text,
      createdAt: new Date(),
      threadId,
      received: true,
      user: {
        _id: profileId,
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
            if (!customMessage.text) {
              return;
            }
            const msgData = {
              message: customMessage.text,
              to_profile_ids: [remoteMessages.receiverProfileId],
            };
            sendMessage(JSON.stringify(msgData));
            setMessages(previousMessages =>
              GiftedChat.append(previousMessages, customMessage),
            );
            setTextField('');
          }}>
          <Image source={primary} />
        </TouchableOpacity>
      </View>
    );
  };

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

  const uploadImage = () => {
    const options = {
      title: 'Select Attachment',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('response', response.path);
        const file = {
          uri: response.uri,
          name: response.fileName,
          type: 'image/png',
        };

        const msgData = {
          message: '',
          attachment: response.data,
          thread_id: threadId,
          to_profile_ids: [remoteMessages.receiverProfileId],
        };
        sendMessage(JSON.stringify(msgData));

        return file;
      }
    });
  };

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{padding: 7}} onPress={() => goBack()}>
          <BackArrow />
        </TouchableOpacity>
        {!remoteMessages.receiverProfileId ? (
          <View style={{alignContent: 'center'}}>
            <Text style={styles.filterHeadingTextM}>New Message</Text>
          </View>
        ) : null}
        {!remoteMessages.receiverProfileId ? <View /> : null}
        {remoteMessages.receiverProfileId ? (
          <View style={styles.rightContainer}>
            {remoteMessages.avatar ? (
              <Image
                style={styles.image}
                source={{uri: remoteMessages.avatar}}
              />
            ) : null}

            <Text numberOfLines={1} style={styles.headerText}>
              {remoteMessages.fullname}
            </Text>
          </View>
        ) : null}
        {remoteMessages.receiverProfileId ? (
          <TouchableOpacity style={styles.leftContainer} onPress={uploadImage}>
            <Icon name="paperclip" size={20} color={buttonColor} />
          </TouchableOpacity>
        ) : null}
      </View>
      {!remoteMessages.receiverProfileId ? (
        <View style={{padding: 10, flex: 1}}>
          <View>
            <View style={styles.filterWrapper}>
              <View style={styles.filterRow}>
                <View style={styles.filterRowItem}>
                  <Text style={styles.atText}>@</Text>
                </View>
                <View style={styles.flexOne}>
                  <DropDownPicker
                    placeholder={
                      user_group === 'company'
                        ? 'Candidate name...'
                        : 'Company name...'
                    }
                    setSearchProfileValue={setSearchProfileValue}
                    items={
                      profiles?.results?.map(profile => ({
                        id: profile.id,
                        name: profile.fullname,
                        avatar: profile.photo,
                      })) || []
                    }
                    resetMessages={resetMessages}
                  />
                </View>
              </View>
              <View style={styles.filterRowItem}>
                <TouchableOpacity>
                  <Icon name="paperclip" color={buttonColor} size={22} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      <View style={{padding: 10, flex: 1}}>
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
            _id: profileId,
          }}
        />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  flexOne: {flex: 1},
  filterHeaderWrapper: {padding: 12, marginBottom: 12},
  filterHeadingTextM: {
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
  filterRowItem: {
    alignSelf: 'flex-start',
    paddingTop: 7,
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
  filterHeadingText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: themeColor,
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
