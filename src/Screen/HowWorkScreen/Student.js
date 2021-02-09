import React from 'react';
import {ScrollView} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BackHeader, SearchBar, FaqItems} from '../../components';
import {skyBlue, themeColor} from '../../utils/Theme/Color';

const HowWorkScreen = ({goBack}) => {
  const renderItem = ({item}) => <FaqItems title={item?.question} />;
  return (
    <View style={styles.container}>
      <BackHeader goBack={goBack} image={true} />
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>How it works</Text>
          <Text style={[styles.subheading, {marginTop: 20}]}>
            For students{' '}
          </Text>
          <Text style={styles.paragraph}>
            For students Get real experience in a way that works for you.
          </Text>

          <Text style={styles.paragraph}>
            Step 1: Create an account on Kado using your email or Linkedin
            account.
          </Text>
          <View />
          <Text style={styles.paragraph}>
            Step 2: Join a project or discover internship opportunities.
          </Text>
          <View />
          <Text style={styles.paragraph}>
            Step 3: Use Kado's chat and milestones feature to communicate and
            track progress.
          </Text>
          <View />
          <Text style={styles.paragraph}>
            Step 4: Prove your skills, and get verified feedback from real
            companies to add to your portfolio.
          </Text>

          <Text style={[styles.subheading, {marginBottom: 10}]}>
            How does Kado help you?
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.paragraphBoldUnderline}>
              Grow your professional network.{' '}
            </Text>
            <Text>
              Connect with companies of all shapes and sizes. Engage large
              multi-nationals, local businesses, non-profits, governments, and
              more!
            </Text>
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.paragraphBoldUnderline}>
              Manage your projects.{' '}
            </Text>
            <Text style={styles.paragraph}>
              In-app chat, video conferencing, file sharing, meeting booking,
              project milestones, and many more tools to help keep projects on
              track.
            </Text>
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.paragraphBoldUnderline}>
              Receive feedback from real-companies{' '}
            </Text>
            <Text style={styles.paragraph}>
              on the skills and knowledge you demonstrated while completing your
              projects on Kado. Easily link your Kado portfolio on job
              applications and LinkedIn.
            </Text>
          </Text>

          <Text style={{...styles.italic, ...styles.paragraph}}>
            Access project opportunities
          </Text>
          <Text style={{...styles.italic, ...styles.paragraph}}>
            Develop & validate new skills
          </Text>
          <Text style={{...styles.italic, ...styles.paragraph}}>
            Build & nurture your employer network
          </Text>
          <Text style={{...styles.italic, ...styles.paragraph}}>
            Earn employment opportunities and incentives
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    color: '#001CD6',
    marginTop: '50@s',
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
    marginTop: '10@s',
    marginBottom: '20@s',
  },
  paragraph: {
    textAlign: 'center',
    marginTop: '15@s',
    marginBottom: '5@s',
    fontSize: '15@s',
    lineHeight: '18@s',
    color: '#292929',
  },
  italic: {
    fontStyle: 'italic',
  },
  body: {
    flex: 1,
    padding: '5@s',
  },
  paragraphBoldUnderline: {
    fontWeight: 'bold',
  },
});

export default HowWorkScreen;
