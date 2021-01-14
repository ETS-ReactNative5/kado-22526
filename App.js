import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './src/store';

export default class App extends React.Component {
  state = {
    isLoaded: false,
  };


 
  renderLoading = () => (
    <View style={[styles.flex]}>
      <Text>Loading</Text>
    </View>
  );

  renderApp = () => (
    <ReduxProvider store={store}>
      <NavigatorProvider
        style={styles.flex}
        ref={(nav) => {
          this.navigator = nav;
        }}>
        <View style={[styles.flex]}>
          <SplashScreen />
        </View>
      </NavigatorProvider>
    </ReduxProvider>
  );

  render = () =>
    this.state.isLoaded ? this.renderApp() : this.renderLoading();
}

const styles = StyleSheet.create({
  flex: {flex: 1},
});
