import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <>
      <ExpoStatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginBottom: StatusBar.currentHeight,
    marginTop: StatusBar.currentHeight,
  },
  list: {
    backgroundColor: 'blue',
    flex: 1,
    padding: 12,
    width: '100%',
  },
  search: {
    backgroundColor: 'green',
    justifyContent: 'center',
    padding: 12,
    width: '100%',
  },
});
