import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {ArrowDownIcon} from '../../../assets/icons';
import Item from './components/Item/Item';
import Styles from './PickerStyles';
const Picker = ({data, onChange, inicialIndex = 0, overlayOpened}) => {
  const [selectedItem, setSelectedItem] = useState(data[inicialIndex]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) overlayOpened(isOpen);
  }, [isOpen]);
  return (
    <View style={{height: '100%', width: '27%'}}>
      <TouchableOpacity
        style={Styles.openOverlayButton}
        onPress={() => setIsOpen(!isOpen)}>
        <ArrowDownIcon style={{alignSelf: 'center'}} />
        <Text style={Styles.openOverlayText}>Search by</Text>
      </TouchableOpacity>
      {isOpen ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.value}
          renderItem={({item}) => (
            <Item
              isSelected={selectedItem == item}
              onPress={() => {
                setIsOpen(false);
                setSelectedItem(item);
                onChange(item);
              }}
              value={item.value}
            />
          )}
          style={Styles.flatListStyles}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default Picker;
