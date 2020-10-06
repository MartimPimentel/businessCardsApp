import React from 'react';
import {View, TextInput} from 'react-native';
import {SearchBarIcon} from '../../../assets/icons';
import Styles from './SearchBarStyles';

const filterData = (query, data) => {
  return data.filter((obj) => {
    return obj.name.search(query) != -1;
  });
};

const SearchBar = ({data, onFilter}) => {
  const placeholder = 'Search Cards';

  return (
    <View style={Styles.textInputView}>
      <TextInput
        placeholder={placeholder}
        style={Styles.textInput}
        onChangeText={(query) => onFilter(filterData(query, data))}
      />
      <SearchBarIcon style={{marginRight: 10}} />
    </View>
  );
};

export default SearchBar;
