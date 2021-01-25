import React from 'react';
import {StyleSheet} from 'react-native';
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
} from '../Container';
import {DrawerContentData} from '../components';
import Animated from 'react-native-reanimated';

import {themeColor, white} from './Theme/Color';

const Stack = createStackNavigator();

const LoginStack = createStackNavigator();

const Auth = () => {
  return (
    <LoginStack.Navigator initialRouteName="Login">
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
