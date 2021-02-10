import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import ChatScreen from '../Screen/ChatScreen';
import {fetchMessages} from '../actions/message';

const ChatContainer = ({route, navigation}) => {
  const {
    params: {threadId, profileId},
  } = route;
  const dispatch = useDispatch();
  const messages = useSelector(state => state.message.data);
  const isloading = useSelector(state => state.message.isloading);
  React.useEffect(() => {
    if (!isloading) {
      dispatch(fetchMessages(threadId));
    }
  }, [dispatch, threadId]);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ChatScreen
        goBack={goBack}
        messages={messages}
        profileId={profileId}
        {...route}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatContainer;
