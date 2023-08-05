import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';

import Restaurants from './src/features/restaurants/screens/Restaurants';

export default function App() {
  return (
    <>
      <ExpoStatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <Restaurants />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: StatusBar.currentHeight,
    marginTop: StatusBar.currentHeight,
  },
});
