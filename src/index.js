import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DogApp extends React.Component {
  state = {
    dogs: [],
  };

  render() {
    const { dogs } = this.state;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>{dogs.name}</Text>
      </View>
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
