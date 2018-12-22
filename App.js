import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { store } from './src/store';

import DogScreen from './src/components/DogScreen';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <DogScreen />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
