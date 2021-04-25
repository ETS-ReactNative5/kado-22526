import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  lightBlackColor,
  skyBlue,
  themeColor,
  white,
} from '../utils/Theme/Color';
import {BackHeader} from '../components';
import {ScaledSheet} from 'react-native-size-matters';
import {ScrollView} from 'react-native';

const AboutUsScreen = ({goBack}) => {
  return (
    <View style={styles.container}>
      <BackHeader goBack={goBack} image={true} openDrawer={true} />
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>About Us</Text>

          <Text style={[styles.subheading, {marginTop: 30}]}>
            Gladymir Philippe - Founder and CEO
          </Text>

          <Text style={[styles.paragraph, {marginBottom: 60}]}>
            Gladymir is a founding member of PandoLabs, an entrepreneurial group
            in Park City, Utah. High schools and Universities often reach out to
            this group asking if there are any startups looking to hire students
            for any projects they may have. Philippe saw the demand for a
            service that connects students with employers for freelance
            projects, motivating him to build Kado.
          </Text>

          <Text style={styles.subheading}>What is Kado?</Text>

          <Text style={styles.paragraph}>
            Kado is the #1 way college students get projects. Receive
            personalized recommendations based on your major, interests, and
            skills. Skip the lines and connect with employers at exclusive
            career fairs and events. Get an inside look at projects, employers,
            and more with thousands of student reviews.
          </Text>

          <Text style={styles.paragraph}>
            Kado aims to help every college student find the right project for
            them, no matter where they go to school, what they are majoring in,
            or what they know.
          </Text>
        </ScrollView>
        {/* <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nulla a
          elit, sed. Porttitor varius morbi dictum laoreet egestas diam ultrices
          duis. Nullam massa feugiat gravida aliquam augue scelerisque sed
          purus, consectetur. Mollis vitae, elit arcu mauris at dictum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. In nulla a elit,
          sed. Porttitor varius morbi dictum laoreet egestas diam ultrices duis.
          Nullam massa feugiat gravida aliquam augue scelerisque sed purus,
          consectetur. Mollis vitae, elit arcu mauris at dictum.
        </Text> */}
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
  },
  text: {
    fontSize: '14@s',
    lineHeight: '16@s',
    marginTop: '4@s',
    textAlign: 'center',
    color: lightBlackColor,
  },

  heading: {
    textAlign: 'center',
    color: '#001CD6',
    marginTop: '40@s',
    marginBottom: '20@s',
    fontSize: '18@s',
    lineHeight: '21@s',
    fontWeight: 'bold',
  },
  subheading: {
    textAlign: 'center',
    color: skyBlue,
    fontSize: '17@s',
    lineHeight: '20@s',
  },
  paragraph: {
    textAlign: 'center',
    marginTop: '20@s',
    marginBottom: '5@s',
    fontSize: '15@s',
    lineHeight: '18@s',
    color: '#292929',
  },
});

export default AboutUsScreen;
