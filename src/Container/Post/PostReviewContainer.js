import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {PostReviewScreen} from '../../Screen';
import {white} from '../../utils/Theme/Color';
import Api from '../../lib/requests/api';
import {PostContext} from '../../context/PostProvider';
import {useNavigation} from '@react-navigation/native';

const PostReviewContainer = props => {
  const {data} = React.useContext(PostContext);
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = () => {
    setLoading(true);
    Api.post('api/v1/job/', data)
      .then(res => {
        setLoading(false);
        navigation.navigate('NewsFeed');
      })
      .catch(err => {
        setLoading(false);
        console.warn(err);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <PostReviewScreen loading={loading} handleSubmit={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default PostReviewContainer;
