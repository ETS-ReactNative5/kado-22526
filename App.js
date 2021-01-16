import React from 'react';
import {SafeAreaView} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/utils/Routes';
// import {Provider as ReduxProvider} from 'react-redux';
// import {store} from './src/store';

// export default class App extends React.Component {
// state = {
//   isLoaded: false,
// };

// renderLoading = () => (
//   <View style={[styles.flex]}>
//     <Text>Loading</Text>
//   </View>
// );

// renderApp = () => (
// <ReduxProvider store={store}>
// <NavigatorProvider
//   style={styles.flex}
//   ref={nav => {
//     this.navigator = nav;
//   }}>

// </NavigatorProvider>
// </ReduxProvider>

// );

//   render = () =>
//     this.state.isLoaded ? this.renderApp() : this.renderLoading();
// }

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
});

export default App;
