import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScaledSheet} from 'react-native-size-matters';
import {lightBlackColor, themeColor, white} from '../Utils/Theme/Color';
import {BackHeader} from '../Components';

const AboutUsScreen = ({goBack}) => {
  return (
    <View style={styles.container}>
      <BackHeader goBack={goBack} image={true} />
      <View style={styles.body}>
        <Text style={styles.heading}>About Us</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nulla a
          elit, sed. Porttitor varius morbi dictum laoreet egestas diam ultrices
          duis. Nullam massa feugiat gravida aliquam augue scelerisque sed
          purus, consectetur. Mollis vitae, elit arcu mauris at dictum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. In nulla a elit,
          sed. Porttitor varius morbi dictum laoreet egestas diam ultrices duis.
          Nullam massa feugiat gravida aliquam augue scelerisque sed purus,
          consectetur. Mollis vitae, elit arcu mauris at dictum.
        </Text>
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

export default AboutUsScreen;
