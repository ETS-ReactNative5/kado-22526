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

          <Text style={[styles.paragraph, {marginBottom: 60}]}>
            Kado is a marketplace for undergrad and new grad students to work on 
            projects and get hired by breakout startups, incorporated in 2021. 
          </Text>
          <Text style={styles.subheading}>Our Mission</Text>
          <Text style={[styles.paragraph, {marginBottom: 60}]}>
            Our mission is to help you foster genuine connections with leaders at 
            career-defining startups. No resume dumps, no impersonal outreach, 
            just real conversations with real people.
          </Text>
          <Text style={styles.subheading}>Our Platform</Text>
          <Text style={[styles.paragraph, {marginBottom: 60}]}>
            Our platform increases efficiencies associated with searching for, 
            contracting and collaborating with, and paying highly skilled college 
            students for short and long term projects. Our expansive repository 
            of data, combined with machine learning capabilities, enable us to 
            better connect startups with college students.
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
