import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/utils/Routes';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';
import PostProvider from './src/context/PostProvider';

const App = () => {
  const [storee, setStore] = useState(store);
  return (
    <Provider store={storee}>
      <PostProvider>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Routes />
          </NavigationContainer>
        </SafeAreaView>
      </PostProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
});

export default App;
