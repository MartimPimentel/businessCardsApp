import React from 'react';
import {useState} from 'react';
import {View, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SearchBarIcon} from '../../../assets/icons';
import {filterCards} from '../../../shared/api/redux/cardsActions';
import Picker from '../Picker/Picker';
import Styles from './SearchBarStyles';

const filterData = (filterBy, query, data) => {
  return data.filter((obj) => {
    var searchQuery = obj[filterBy];
    return searchQuery.toLowerCase().search(query.toLowerCase()) != -1;
  });
};
const categories = [
  {stringName: 'Name', objectName: 'name'},
  {stringName: 'Position', objectName: 'role'},
  {stringName: 'Company', objectName: 'companyName'},
];
const SearchBar = ({overlayOpened}) => {
  const placeholder = 'Search Cards';
  const {cards} = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState({
    stringName: 'Name',
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
            justifyContent: 'center',
          }}>
          <TextInput
            placeholder={placeholder}
            style={Styles.textInput}
            onChangeText={(query) =>
              dispatch(
                filterCards(
                  filterData(selectedCategory.objectName, query, cards),
                ),
              )
            }
          />
        </View>
        <SearchBarIcon style={{alignSelf: 'center'}} />
      </View>
    </View>
  );
};

export default SearchBar;
