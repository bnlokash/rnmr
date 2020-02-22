import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Counter } from 'src/components';

const Root = () => {
  return <>
    <View style={styles.container}>
      <Counter />
    </View>
  </>
}

export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});