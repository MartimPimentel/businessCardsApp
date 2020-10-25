import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CheckMarkIcon} from '../../../../../assets/icons';
import Styles from './ItemStyle';
const Item = ({isSelected, value, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={Styles.itemButton} onPress={onPress}>
        <Text
          style={{
            width: '75%',
          }}>
          {value}
        </Text>
        {isSelected ? <CheckMarkIcon /> : <View style={{width: '15%'}} />}
      </TouchableOpacity>
    </View>
  );
};

export default Item;
