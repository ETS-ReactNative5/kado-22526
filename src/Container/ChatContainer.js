import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { useDispatch, useSelector } from 'react-redux';
import { intializeChat } from '../actions/chat';

import { EditProfileScreen } from '../Screen';
import ChatScreen from '../Screen/ChatScreen';
// import { w3cwebsocket as W3CWebSocket } from "websocket";
import Storage from '../lib/requests/storage';
const ChatContainer = (props) => {
  const goBack = () => {
    const { navigation } = props;
    navigation.goBack();
  };

  const [user, setUser] = useState('')
  const dispatch = useDispatch();
  const message = useSelector(state => state);
  let chatSocket = null;


  useEffect(() => {
    Storage.retrieveData('userDetails').then(resp => {
      console.log("from resp", resp)

      setUser(resp)
    })

  }, [])


  const chatFunction = () => {
    // const roomName = JSON.parse(document.getElementById('thread_id').textContent);
    var user_id = user.profile_id
    // var host = window.location.host;
    // var socket_protocol = 'ws://';
    // if (window.location.protocol === 'https:') {
    //   socket_protocol = 'wss://';
    // }
  }


  // console.log("const", chatSocket.onmessage)

  useEffect(() => {

  }, [user])

  useEffect(() => {
    // chatSocket = new WebSocket(
    //   `wss://kado-22526.botics.co/ws/chat/2/`
    // );
    // console.log(chatSocket)
    // chatSocket.onopen = () => console.log(",d,,")

  })

  const sendMessage = async () => {
    const message = {
      "content": "ok 3",
      "to_profile_ids": [4],
      "thread_id": 2
    }
    chatSocket = await new WebSocket(
      `wss://kado-22526.botics.co/ws/chat/2/?token=${user.key}`
    );
    chatSocket.onerror = function (event) {
      console.error("WebSocket error:", event);
    };
    // console.log(chatSocket)
    chatSocket.onopen = async () => {
      try {
        // console.log("mm")
        chatSocket.send(JSON.stringify({
          'message': 'helol',
          'to_profile_ids': [2], // send message to user with profile id 2
        }))
      } catch (error) {
        console.log("erris", error)
      }
    }



    // chatSocket.onmessage = function (event) {
    //   console.error("message", event);

    // }
    // console.log(chatSocket.onerror)

    // dispatch(intializeChat(message))
  }

  return (
    <SafeAreaView style={styles.container}>
      <ChatScreen goBack={goBack} sendMessage={sendMessage} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatContainer;
