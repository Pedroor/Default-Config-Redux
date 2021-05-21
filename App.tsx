import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { Catalog } from './src/components/Catalog';
import { Cart } from './src/components/Cart';
import store from './src/store';

const App = () => {
  if (__DEV__) {
    require('react-devtools');
  }
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Text>OLA MUNDO</Text>
        <Catalog />
        <Cart />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
