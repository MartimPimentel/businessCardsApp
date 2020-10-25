import React from 'react';
import {useState} from 'react';
import {View, TextInput} from 'react-native';
import {SearchBarIcon} from '../../../assets/icons';
import Picker from '../Picker/Picker';
import Styles from './SearchBarStyles';

const filterData = (filterBy, query, data) => {
  return data.filter((obj) => {
    var searchQuery = obj[filterBy];
    return searchQuery.toLowerCase().search(query.toLowerCase()) != -1;
  });
};
const categories = [
  {value: 'Name', objectName: 'name'},
  {value: 'Position', objectName: 'companyPosition'},
  {value: 'Company', objectName: 'companyName'},
];
const SearchBar = ({data, onFilter, overlayOpened}) => {
  const placeholder = 'Search Cards';
  const [selectedCategory, setSelectedCategory] = useState({
    value: 'Name',
    objectName: 'name',
  });
  return (
    <View style={{width: '100%'}}>
      <View style={Styles.textInputView}>
        <Picker
          data={categories}
          onChange={(type) => {
            setSelectedCategory(type);
          }}
          overlayOpened={overlayOpened}
        />
        <View
          style={{
            width: '62%',
          }}>
          <TextInput
            placeholder={placeholder}
            style={Styles.textInput}
            onChangeText={(query) =>
              onFilter(filterData(selectedCategory.objectName, query, data))
            }
          />
        </View>
        <SearchBarIcon style={{alignSelf: 'center'}} />
      </View>
    </View>
  );
};

export default SearchBar;
