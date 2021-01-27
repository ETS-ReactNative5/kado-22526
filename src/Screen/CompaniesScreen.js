import React from 'react';
import {FlatList} from 'react-native';
import {Text, View, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BackHeader, CompaniesItem, SearchBar} from '../components';
import {blackColorText, buttonColor, lightGray} from '../utils/Theme/Color';

import IBM from '../assets/Image/IBM.png';
import cocacola from '../assets/Image/cocacola.png';
import huwei from '../assets/Image/huwei.png';
import samsung from '../assets/Image/samsung.png';

import twitter from '../assets/Image/twitter.png';

import cnn from '../assets/Image/cnn.png';

import newyork from '../assets/Image/newyork.png';
import hp from '../assets/Image/hp.png';
import carfor from '../assets/Image/carfor.png';
import eroksi from '../assets/Image/eroksi.png';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'IBM',
    subtitle: 'Corona, California',
    image: IBM,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Coca-Cola',
    subtitle: 'Corona, California',
    image: cocacola,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Huawei',
    subtitle: 'Corona, California',
    image: huwei,
  },
  {
    id: '1',
    title: 'Samsung Galaxy',
    subtitle: 'Corona, California',
    image: samsung,
  },
  {
    id: '2',
    title: 'Twitter',
    subtitle: 'Corona, California',
    image: twitter,
  },
  {
    id: '3',
    title: 'CNN',
    subtitle: 'Corona, California',
    image: cnn,
  },
  {
    id: '4',
    title: 'The New York Times',
    subtitle: 'Corona, California',
    image: newyork,
  },
  {
    id: '5',
    title: 'HP',
    subtitle: 'Corona, California',
    image: hp,
  },
  {
    id: '6',
    title: 'Carefour',
    subtitle: 'Corona, California',
    image: carfor,
  },
  {
    id: '7',
    title: 'EROSKI',
    subtitle: 'Corona, California',
    image: eroksi,
  },
];

const CompaniesScreen = ({goBack, navigate}) => {
  const renderItem = ({item}) => (
    <CompaniesItem
      image={item.image}
      title={item.title}
      navigate={navigate}
      subtitle={item.subtitle}
    />
  );
  return (
    <View style={styles.container}>
      <BackHeader goBack={goBack} title="Companies" />
      <View style={styles.searchHeader}>
        <SearchBar placeHolder="Search companies..." />
      </View>

      <FlatList renderItem={renderItem} data={DATA} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: lightGray,
    padding: '10@s',
    borderRadius: '7@s',
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
  searchHeader: {
    padding: '10@s',
  },
});

export default CompaniesScreen;
