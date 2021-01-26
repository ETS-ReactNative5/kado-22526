import React, {useRef} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {
  BottomDate,
  BottomHeader,
  FeedCard,
  FeedHeader,
  Filters,
  SheetItems,
} from '../components';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  amountBorder,
  blackColorText,
  buttonColor,
  feedItemBack,
  lightBlackColor,
  lightGray,
  textBlackColor,
  themeColor,
  white,
} from '../utils/Theme/Color';
import {ScaledSheet} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const JobsScreen = ({navigate}) => {
  const renderItem = ({item}) => <FeedCard title={item.title} />;
  const refRBSheet = useRef();
  const refRBSheetProject = useRef();
  const refRBSheetDate = useRef();
  const refRBSheetLocation = useRef();
  const refRBSheetPay = useRef();
  return (
    <View style={styles.container}>
      <FeedHeader navigate={navigate} rightBtns={true} />
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={true}
        animationType="fade"
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
        <BottomHeader refRBSheet={refRBSheet} title="Sort by Category" />
        <SheetItems refRBSheet={refRBSheet} title="Services" />
        <SheetItems refRBSheet={refRBSheet} title="Project" />
      </RBSheet>

      <RBSheet
        ref={refRBSheetProject}
        closeOnPressMask={true}
        animationType="fade"
        height={400}
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
          refRBSheet={refRBSheetProject}
          title="Sort by Type of Project"
        />
        <SheetItems refRBSheet={refRBSheetProject} title="Part-time" />
        <SheetItems refRBSheet={refRBSheetProject} title="Full-time" />
        <SheetItems refRBSheet={refRBSheetProject} title="Remote" />
        <SheetItems refRBSheet={refRBSheetProject} title="One-time Project" />
        <SheetItems refRBSheet={refRBSheetProject} title="Ongoing Project" />
      </RBSheet>

      <RBSheet
        ref={refRBSheetDate}
        closeOnPressMask={true}
        animationType="fade"
        height={300}
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
        <BottomHeader refRBSheet={refRBSheetDate} title="Sort by Date" />
        <BottomDate title="Start" placeholder="DD/MM/YYY " />
        <BottomDate title="Finish" placeholder="DD/MM/YYY " />
        <BottomDate title="Availability" placeholder="Total hours per week" />
      </RBSheet>

      <RBSheet
        ref={refRBSheetLocation}
        closeOnPressMask={true}
        animationType="fade"
        height={300}
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
        <BottomHeader refRBSheet={refRBSheetLocation} title="Sort by Date" />
        <View style={styles.locationContainer}>
          <TextInput
            placeholderTextColor="rgba(rgba(41, 41, 41, 0.2))"
            style={styles.inputLocation}
            placeholder="Type in your location"
          />
        </View>
      </RBSheet>

      <RBSheet
        ref={refRBSheetPay}
        closeOnPressMask={true}
        animationType="fade"
        height={200}
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
        <BottomHeader refRBSheet={refRBSheetPay} title="Sort by Pay" />
        <View style={styles.paymentContainer}>
          <View style={styles.amountContainer}>
            <TextInput
              placeholderTextColor="rgba(rgba(41, 41, 41, 0.2))"
              style={styles.inputLocation}
              placeholder="Min $"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.amountContainer}>
            <TextInput
              placeholderTextColor="rgba(rgba(41, 41, 41, 0.2))"
              style={styles.inputLocation}
              placeholder="Max $"
              keyboardType="numeric"
            />
          </View>
        </View>
      </RBSheet>
      <View style={styles.body}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.helloText}>Hello, </Text>
          <Text numberOfLines={1} style={styles.userName}>
            Dan Smith
          </Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchIconContainer}>
            <Icon name="search" size={20} color={buttonColor} />
          </View>

          <TextInput
            placeholder="Search for your next jobs..."
            style={styles.input}
            placeholderTextColor="#8E8E8E"
          />
        </View>

        <View>
          <View style={styles.filtersContainer}>
            <Text style={styles.filterText}>Filters:</Text>
            <TouchableOpacity>
              <Icons name="clear" size={22} color={buttonColor} />
            </TouchableOpacity>
          </View>
          <View style={styles.categoryContainer}>
            <Filters refRBSheet={refRBSheet} title="Catetgory" />
            <Filters refRBSheet={refRBSheetProject} title="Type of project" />
            <Filters refRBSheet={refRBSheetDate} title="Date" />
            <Filters refRBSheet={refRBSheetLocation} title="Location" />
            <Filters refRBSheet={refRBSheetPay} title="Payment" />
          </View>
        </View>

        <View style={styles.tabContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            data={DATA}
          />
        </View>
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
    padding: '10@s',
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20@s',
  },
  helloText: {
    fontSize: '32@s',
    lineHeight: '43@s',
    color: themeColor,
  },
  userName: {
    fontSize: '32@s',
    lineHeight: '43@s',
    color: themeColor,
    fontWeight: 'bold',
    width: '65%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: lightGray,
    padding: '10@s',
    borderRadius: '12@s',
  },
  searchIconContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 0,
    lineHeight: '18@s',
    fontSize: '15@s',
    color: blackColorText,
    paddingRight: '15@s',
  },
  tabContainer: {
    flex: 1,
    marginTop: '14@s',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: '10@s',
  },
  filterText: {
    fontSize: '14@s',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20@s',
    letterSpacing: '1@s',
    color: buttonColor,
  },
  locationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLocation: {
    color: blackColorText,
    fontSize: '15@s',
    lineHeight: '18@s',
  },
  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '15@s',
  },
  amountContainer: {
    width: '49%',
    borderColor: amountBorder,
    borderWidth: 1,
    borderRadius: '5@s',
    paddingLeft: '10@s',
    backgroundColor: feedItemBack,
  },
});
export default JobsScreen;
