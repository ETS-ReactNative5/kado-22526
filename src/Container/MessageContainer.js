import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import Storage from '../lib/requests/storage';
import {MessageScreen} from '../Screen';
import {white} from '../utils/Theme/Color';
import {fetchThreads} from '../actions/thread';

const MessageContainer = props => {
  const dispatch = useDispatch();
  const threads = useSelector(state => state.thread.data);
  const isloading = useSelector(state => state.thread.isloading);
  const [profileId, setProfileId] = React.useState(0);
  const [querySearch, setSearchQuerySearch] = React.useState('');

  useEffect(() => {
    Storage.retrieveData('access_token').then(item => {
      setProfileId(item?.profile_id);
    });
    if (!isloading) {
      dispatch(fetchThreads(querySearch));
    }
  }, [dispatch, querySearch]);
  const goBack = () => {
    const {navigation} = props;
    navigation.goBack();
  };

  const navigate = route => {
    const {navigation} = props;
    navigation.navigate(route);
  };

  return (
    <SafeAreaView style={styles.contianer}>
      <MessageScreen
        goBack={goBack}
        navigate={navigate}
        threads={threads}
        profileId={profileId}
        onSearch={setSearchQuerySearch}
        querySearch={querySearch}
        {...props}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: white,
  },
});

export default MessageContainer;
