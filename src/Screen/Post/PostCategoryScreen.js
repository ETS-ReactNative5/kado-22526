import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';
import RBSheet from 'react-native-raw-bottom-sheet';
import {FeedHeader, BottomHeader} from '../../components';
import {PostContext} from '../../context/PostProvider';
import {buttonColor, white, feedItemBack} from '../../utils/Theme/Color';

const PostCategoryScreen = () => {
  const {categories, setData, data} = React.useContext(PostContext);
  const popular_categories = [
    'Social Media Manager',
    'Sales Representative',
    'Copywriter',
    'Graphic Designer',
  ];

  const navigation = useNavigation();
  const refRBSheet = useRef();
  const renderItem = ({item}) => (
    <View>
      <TouchableOpacity style={styles.categoryBtnContainer}>
        <Text style={styles.categoryBtnText}>{item}</Text>
      </TouchableOpacity>
    </View>
  );
  const renderRBItem = ({item}) => (
    <View style={styles.rbItem}>
      <TouchableOpacity
        style={styles.rbBtnContainer}
        onPress={() => {
          refRBSheet.current.close();
          setData({...data, category: item.id, categoryName: item.name});
          navigation.navigate('PostDescription');
        }}>
        <Text style={styles.categoryBtnText}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <FeedHeader rightBtns={true} image />

      <View style={styles.body}>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Popular roles on Kado</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          data={popular_categories}
          style={styles.flatlist}
          keyExtractor={item => item}
        />
        <View>
          <TouchableOpacity
            style={styles.postBtnContainer}
            onPress={() => refRBSheet.current.open()}>
            <Text style={styles.postText}>Select Category</Text>
          </TouchableOpacity>
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnPressMask={true}
          animationType="fade"
          height={420}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
            draggableIcon: {
              backgroundColor: '#000',
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            },
            container: {
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
            },
          }}>
          <BottomHeader
            hideCheckIcon={true}
            refRBSheet={refRBSheet}
            title="Select Category"
          />

          <FlatList
            renderItem={renderRBItem}
            keyExtractor={(item, index) => {
              return index;
            }}
            data={categories}
          />
        </RBSheet>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  rbBtnContainer: {
    justifyContent: 'center',
  },
  rbItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15@s',
    borderBottomColor: feedItemBack,
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: white,
  },
  bodyContainer: {
    paddingBottom: '20@s',
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
    marginTop: '10@s',
  },
  text: {
    textAlign: 'center',
    marginTop: '50@s',
    fontSize: '18@s',
    lineHeight: '21@s',
    fontWeight: '700',
  },
  postText: {
    color: white,
    fontSize: '14@s',
    lineHeight: '18@s',
    marginLeft: '5@s',
  },
  postBtnContainer: {
    padding: '10@s',
    backgroundColor: buttonColor,
    marginTop: '60@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '35@s',
  },
  categoryBtnContainer: {
    padding: '10@s',
    backgroundColor: feedItemBack,
    marginTop: '15@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '35@s',
  },
  categoryBtnText: {
    fontWeight: '700',
    fontSize: '14@s',
  },
  flatlist: {
    height: '250@s',
    flexGrow: 0,
  },
  body: {
    flex: 1,
    padding: '5@s',
  },
});

export default PostCategoryScreen;
