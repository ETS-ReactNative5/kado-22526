import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/utils/Routes';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';
import PostProvider from './src/context/PostProvider';
import KadoProvider from './src/context/KadoProvider';

const App = () => {
  const [storee, setStore] = useState(store);
  return (
    <Provider store={storee}>
      <PostProvider>
        <KadoProvider>
          <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
              <StatusBar backgroundColor="white" barStyle="dark-content" />
              <Routes />
            </NavigationContainer>
          </SafeAreaView>
        </KadoProvider>
      </PostProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
});

export default App;
