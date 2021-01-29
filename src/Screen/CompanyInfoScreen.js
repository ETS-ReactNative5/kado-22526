import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import IBMBack from '../assets/Image/IBMBack.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IBM from '../assets/Image/ibmBig.png';
import {ScaledSheet} from 'react-native-size-matters';
import {
  themeColor,
  white,
  addressColor,
  btnBackColor,
  buttonColor,
} from '../utils/Theme/Color';
import {TouchableOpacity} from 'react-native';
import {BackArrow, FollowIcon} from '../assets/Image';
import {Image} from 'react-native';
import {ScrollView} from 'react-native';

const CompanyInfoScreen = ({goBack, singleCompany}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground style={styles.imageBack} source={IBMBack}>
          <TouchableOpacity onPress={goBack} style={styles.arrowBack}>
            <BackArrow />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={styles.centerImage}
            source={{uri: singleCompany?.results[0]?.photo}}
          />
        </View>
        <View style={styles.headingContianer}>
          <Text numberOfLines={1} style={styles.heading}>
            {singleCompany?.results[0]?.fullname}
          </Text>
          <Text numberOfLines={1} style={styles.adderess}>
            {singleCompany?.results[0]?.location}
          </Text>

          <View style={styles.followerContainer}>
            <View>
              <Text style={styles.countText}>1208</Text>
              <Text style={styles.followersText}>followers</Text>
            </View>
            <View>
              <Text style={styles.countText}>1208</Text>
              <Text style={styles.followersText}>followings</Text>
            </View>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.paragraph}>
              International Business Machines Corporation (IBM) is an American
              multinational technology and consulting company headquartered in
              Armonk, New York, with more than 350,000 employees serving clients
              in 170 countries. On October 8, 2020,
            </Text>
            <Text style={styles.paragraph}>
              IBM announced it was spinning off the Managed Infrastructure
              Services unit of its Global Technology Services division into a
              new public company, an action expected to be completed by the end
              of 2021.
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerbtn}>
            <FollowIcon />
            <Text style={styles.footerText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerbtn}>
            <Icon name="language" size={20} color={buttonColor} />
            <Text style={styles.footerText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  imageBack: {
    width: '100%',
    height: '146@s',
  },
  arrowBack: {
    height: '44@s',
    width: '44@s',
    borderRadius: '88@s',
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10@s',
    marginLeft: '10@s',
  },
  centerImage: {
    height: '118@s',
    width: '118@s',
    borderRadius: '110@s',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-63@s',
  },
  heading: {
    fontSize: '32@s',
    lineHeight: '38@s',
    color: themeColor,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '90%',
  },

  headingContianer: {
    marginTop: '10@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  adderess: {
    fontSize: '13@s',
    lineHeight: '16@s',
    color: addressColor,
    textAlign: 'center',
    width: '90%',
  },
  followerContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10@s',
  },
  countText: {
    color: themeColor,
    fontSize: '18@s',
    lineHeight: '21@s',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  followersText: {
    fontSize: '11@s',
    lineHeight: '13@s',
    textAlign: 'center',
  },

  paragraph: {
    fontSize: '14@s',
    lineHeight: '16@s',
    marginBottom: '10@s',
    textAlign: 'justify',
  },
  textContainer: {
    padding: '15@s',
  },
  footer: {
    padding: '20@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerbtn: {
    backgroundColor: btnBackColor,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '10@s',
    borderRadius: '15@s',
  },
  footerText: {
    fontSize: '14@s',
    lineHeight: '18@s',
    color: themeColor,
    fontWeight: '600',
    marginLeft: '10@s',
  },
});

export default CompanyInfoScreen;
