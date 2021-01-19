import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { EditProfileScreen } from '../Screen';
import ChatScreen from '../Screen/ChatScreen';

const ChatContainer = (props) => {
    const goBack = () => {
        const { navigation } = props;
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ChatScreen goBack={goBack} />
        </SafeAreaView>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
});

export default ChatContainer;
