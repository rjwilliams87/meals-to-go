import React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

import colors from '../../../styles/colors';

const defaultSearch = (value) => console.log(value);

export default function Search({ onSearch = defaultSearch }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);
  const handleSearch = () => onSearch(searchQuery);

  return (
    <Searchbar
      elevation={1}
      inputStyle={styles.input}
      onChangeText={onChangeSearch}
      placeholder="Search"
      value={searchQuery}
      showDivider={false}
      style={styles.search}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
  },
  search: {
    backgroundColor: colors.white,
  },
});
