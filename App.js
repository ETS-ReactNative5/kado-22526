import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/utils/Routes';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';

const App = () => {
  const [storee, setStore] = useState(store)
  return (
    <Provider store={storee}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
});

export default App;
