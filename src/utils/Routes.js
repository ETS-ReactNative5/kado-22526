import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Storage from '../lib/requests/storage';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
/// Screen Containers
import {
  EditProfileContainer,
  LoginContainer,
  SignUpContainer,
  AboutUsContainer,
  NewsFeedContainer,
  MessageContainer,
  ChatContainer,
  NewMessageContainer,
  ExploreContainer,
  DeleteAccountContainer,
  ProfileContainer,
  JobsContainer,
  CompaniesContainer,
  FAQContainer,
  PaymentContainer,
  CompanyInfoContainer,
  NotSignedContainer,
  HowWorkContainer,
  EditCompanyPofileContainr,
  BlankPage,
} from '../Container';
import {DrawerContentData} from '../components';
import Animated from 'react-native-reanimated';

import {themeColor, white} from './Theme/Color';
import AuthLoadingScreen from '../Screen/AuthLoadingScreen';

const Stack = createStackNavigator();

const LoginStack = createStackNavigator();

const Auth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    Storage.retrieveData('access_token').then(token => {
      setCurrentUser(token);
    });
  }, []);

  return (
    <LoginStack.Navigator initialRouteName="AuthLoadingScreen">
      <Stack.Screen
        name="SignUp"
        component={SignUpContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthLoadingScreen"
        component={AuthLoadingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={MyDrawer}
        options={{headerShown: false}}
      />
    </LoginStack.Navigator>
  );
};
const App = ({style}) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator initialRouteName="NewsFeed">
        <Stack.Screen
          name="EditProfile"
          component={EditProfileContainer}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EditCompanyProfile"
          component={EditCompanyPofileContainr}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="NewsFeed"
          component={NewsFeedContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUsContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Message"
          component={MessageContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={ChatContainer}
          initialParams={{ threadId: 42 }}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Explore"
          component={ExploreContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DeleteAccount"
          component={DeleteAccountContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Jobs"
          component={JobsContainer}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Company"
          component={CompaniesContainer}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="FAQ"
          component={FAQContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CompanyInfo"
          component={CompanyInfoContainer}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="NotSigned"
          component={NotSignedContainer}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="HowWork"
          component={HowWorkContainer}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="NewMessage"
          component={NewMessageContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BlankPage"
          component={BlankPage}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </Animated.View>
  );
};

const Drawer = createDrawerNavigator();

const MyDrawer = props => {
  // const [state, setState] = React.useState(Animated.Value(0));
  const [state, setState] = React.useState(new Animated.Value(0));
  const navigate = async routeName => {
    const {navigation} = props;
    await navigation.navigate(routeName);
  };

  const scale = Animated.interpolate(state, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolate(state, {
    inputRange: [0, 10],
    outputRange: [10, 20],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="slide"
      drawerStyle={styles.drawerStyles}
      overlayColor="transparent"
      contentContainerStyle={{flex: 1}}
      drawerContentOptions={{
        activeBackgroundColor: white,
        activeTintColor: 'green',
        inactiveTintColor: 'green',
      }}
      sceneContainerStyle={{backgroundColor: themeColor}}
      // drawerContent={(props) => (
      //   <DrawerContentData navigate={navigate} {...props} />
      // )}
      drawerContent={props => {
        setState(props.progress);
        return <DrawerContentData {...props} />;
      }}>
      <Drawer.Screen name="Screens">
        {props => <App {...props} style={animatedStyle} />}
      </Drawer.Screen>
      {/* <Drawer.Screen name="Home" component={App} style={animatedStyle} /> */}
    </Drawer.Navigator>
  );
};

const MainScreen = createSwitchNavigator(
  {
    Auth: {
      screen: Auth,
    },
    Home: {
      screen: App,
    },
    MyDrawer: {
      screen: MyDrawer,
    },
  },
  {
    initialRouteName: 'Auth',
  },
);

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
    // borderWidth: 1,
  },
  drawerStyles: {
    flex: 1,
    width: '70%',
    backgroundColor: 'transparent',
  },
});

export default createAppContainer(MainScreen);
