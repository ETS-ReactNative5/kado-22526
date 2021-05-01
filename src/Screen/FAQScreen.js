import React, { useEffect } from 'react';
import {ScrollView} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  BackHeader,
  CompaniesItem,
  FeedButton,
  SearchBar,
  FaqItems,
} from '../components';
import {
  blackColorText,
  buttonColor,
  lightGray,
  themeColor,
  white,
} from '../utils/Theme/Color';

const FAQScreen = ({
  goBack,
  navigate,
  faqList,
  handleChange,
  submitFaq,
  isloading,
  dispatch,
  fetchAllFaq,
  submitLoading,
  data
}) => {
  const renderItem = ({item}) => <FaqItems title={item?.question} />;

  useEffect(() => {
    console.log("FAQ: ", faqList);
  }, [faqList]);

  return (
    <View style={styles.container}>
      <BackHeader goBack={goBack} title="FAQ's" />
      <View style={{padding: 15}}>
        <SearchBar
          onChangeText={value => dispatch(fetchAllFaq(value))}
          placeHolder="Search FAQ’s..."
        />
      </View>

      <ScrollView>
        {isloading ? (
          <ActivityIndicator color={buttonColor} />
        ) : (
          <View style={{height: 200}}>
            <FlatList renderItem={renderItem} data={faqList?.results} />
          </View>
        )}

        <View style={styles.centerContainer}>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>Don’t see your question?</Text>
          </View>
        </View>
        <View style={styles.inputfieldcontainerPadding}>
          <View style={styles.inputfieldContainer}>
            <TextInput
              style={styles.typequestionText}
              placeholder="Type your question to submit..."
              placeholderTextColor="#C0BFCD"
              multiline={true}
              value={data?.question}
              onChangeText={value => handleChange('question', value)}
            />
          </View>
        </View>

        <View style={styles.inputfieldcontainerPadding}>
          <TouchableOpacity
            onPress={() => submitFaq()}
            style={styles.registerBtnContainer}>
            {submitLoading ? (
              <ActivityIndicator color={white} />
            ) : (
              <Text style={styles.registerText}>Submit</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  borderContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#F2F1F8',
    padding: '15@s',
  },
  differneceText: {
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '15@s',
    textAlign: 'left',
    color: themeColor,
  },
  moneyText: {
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '15@s',
    textAlign: 'left',
    marginTop: '10@s',
    marginBottom: '10@s',
    padding: '10@s',
    color: themeColor,
  },
  borderbottomContainer: {
    borderBottomWidth: 1,
    borderColor: '#F2F1F8',
  },
  centerContainer: {
    alignItems: 'center',
    marginTop: '30@s',
  },
  questionContainer: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  questionText: {
    fontSize: '14@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '18@s',
    color: themeColor,
    marginRight: '3@s',
  },
  visitText: {
    fontSize: '14@s',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: '18@s',
    color: '#001CD6',
    borderBottomWidth: 1,
    borderBottomColor: '#001CD6',
  },
  inputfieldContainer: {
    backgroundColor: '#F7F7F9',
    height: '94@s',
    borderWidth: 1,
    borderColor: '#C0BFCD',
    borderRadius: '5@s',
    marginTop: '10@s',
  },
  typequestionText: {
    fontSize: '14@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '18@s',
    textAlign: 'left',
    color: themeColor,
  },
  inputfieldcontainerPadding: {
    padding: '15@s',
  },

  registerBtnContainer: {
    padding: '10@s',
    backgroundColor: buttonColor,

    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: white,
    fontSize: '14@s',
    lineHeight: '18@s',
  },
});

export default FAQScreen;
