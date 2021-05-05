import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {useDispatch, useSelector} from 'react-redux';
import ChatScreen from '../Screen/ChatScreen';
import {fetchMessages, getMessages} from '../actions/message';
import {fetchCompanies} from '../actions/company';
import Storage from '../lib/requests/storage';
import { getProfileInfoById } from '../actions/profile';

const ChatContainer = ({route, navigation}) => {
  const {
    params: {threadId, profileId},
  } = route;
  const dispatch = useDispatch();
  const messages = useSelector(state => state.message.data);
  const isloading = useSelector(state => state.message.isloading);

  const {isloading: isFetching, companyList: profiles} = useSelector(
    state => state.company,
  );
  const [profileType, setProfileType] = useState('');
  const [searchProfileValue, setSearchProfileValue] = useState('');
  React.useEffect(() => {
    if (!profileType) {
      Storage.retrieveData('access_token').then(resp => {
        resp?.user_groups.map(item => {
          setProfileType(item);
        });
      });
    }
  });

  React.useEffect(() => {
    if (!isloading && threadId) {
      dispatch(fetchMessages(threadId));
    }
  }, [threadId]);

  React.useEffect(() => {
    if (!threadId) {
      dispatch(getProfileInfoById(profileId, (response) => {
        resetMessages(response.id, response.fullname, response.photo);
      }));
    }
  }, [threadId, profileId]);

  React.useEffect(() => {
    if (!isFetching) {
      dispatch(
        fetchCompanies(
          profileType === 'student' ? 'company' : 'student',
          searchProfileValue,
        ),
      );
    }
  }, [profileType, searchProfileValue]);

  const resetMessages = (id = undefined, fullname = '', avatar = '') => {
    dispatch(
      getMessages({
        id: id,
        avatar,
        fullname,
        receiverProfileId: id,
        messages: [],
      }),
    );
  };
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ChatScreen
        goBack={goBack}
        messages={messages}
        profileId={profileId}
        threadId={threadId}
        profiles={profiles}
        isloading={isloading || isFetching}
        setSearchProfileValue={setSearchProfileValue}
        resetMessages={resetMessages}
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
