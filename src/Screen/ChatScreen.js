import React, { useState, useCallback, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScaledSheet } from 'react-native-size-matters';
import { lightBlackColor, themeColor, white } from '../Utils/Theme/Color';
import { BackHeader } from '../Components';
import { GiftedChat } from 'react-native-gifted-chat'
const ChatScreen = ({ goBack }) => {
    const [messages, setMessages] = useState([]);
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
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
    return (
        <View style={styles.container}>
            <BackHeader goBack={goBack} image={true} />
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
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
});

export default ChatScreen;
