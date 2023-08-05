import React from 'react';
import { StyleSheet, View } from 'react-native';

import RestaurantInfo from '../components/RestaurantInfo';
import Search from '../components/Search';

export default function Restaurants() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Search />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    padding: 20,
    width: '100%',
  },
  search: {
    justifyContent: 'center',
    paddingHorizontal: 14,
    width: '100%',
  },
});
