import React from 'react';
import {ScrollView} from 'react-native';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {BackHeader, FaqItems} from '../../components';
import {skyBlue} from '../../utils/Theme/Color';

const HowWorkScreen = ({goBack}) => {
  const renderItem = ({item}) => <FaqItems title={item?.question} />;
  return (
    <View style={styles.container}>
      <BackHeader goBack={goBack} image={true} />
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>How it works</Text>
          <Text style={[styles.subheading, {marginTop: 20}]}>
            For companies{' '}
          </Text>
          <Text style={styles.paragraph}>
            Let talented students help you with your business while they gain
            the experience they need to succeed in the future.
          </Text>

          <Text style={styles.paragraph}>
            Step 1: Post a project for your business that you want one or more
            student to complete.
          </Text>
          <Text style={styles.paragraph}>
            Step 2: Get a request to collaborate with students, and send your
            own. Find the right match.
          </Text>
          <Text style={styles.paragraph}>
            Step 3: Use Kado's chat and milestones feature to communicate and
            track progress.
          </Text>

          <Text style={styles.paragraph}>
            Step 3: Use Kado's chat and milestones feature to communicate and
            track progress.
          </Text>

          <Text style={[styles.paragraph, {marginBottom: 30}]}>
            Step 4: Receive student's work and provide feedback for student
            portfolios.
          </Text>

          <Text style={[styles.subheading, {marginBottom: 10}]}>
            Access to students network
          </Text>
          <Text style={styles.paragraph}>
            Gain access to a network of thousands of students across 100+
            academic institutions globally. Find the right group of students to
            complete your project, through our marketplace.
          </Text>

          <Text style={[styles.subheading, {marginBottom: 10}]}>
            Student talent and insights
          </Text>
          <Text style={styles.paragraph}>
            Future CEOs are in the classroom right now. Tap into their
            innovative minds to grow your business knowledge.
          </Text>

          <Text style={[styles.subheading, {marginBottom: 10}]}>
            Hire a student
          </Text>
          <Text style={styles.paragraph}>
            Work with students virtually through a project-based internship.
            Test drive talent while getting meaningful work completed.
          </Text>
          <Text style={styles.paragraph}>Generate Fresh Insights & Ideas</Text>
          <Text style={styles.paragraph}>
            Discover, Attract and Recruit Talent
          </Text>
          <Text style={styles.paragraph}>Elevate Your Employer Brand</Text>
          <Text style={styles.paragraph}>Shape Our Future Workforce</Text>
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
  body: {
    flex: 1,
    padding: '5@s',
  },
});

export default HowWorkScreen;
