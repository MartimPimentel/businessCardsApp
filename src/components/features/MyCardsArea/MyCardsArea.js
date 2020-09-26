import React, {useEffect, useState} from 'react';
import {View, Text, LogBox} from 'react-native';
import Swipper from './components/Swipper/Swipper';
import Styles from './MyCardAreaStyles';
import HeaderSearch from '../../shared/Header/HeaderSearch';
import CardForm from './components/CardForm/CardForm';

const dataObj = [
  {
    name: 'Martim Pimentel',
    phone: '+351 915 803 555',
    address: 'Rua Cesário Verde 484, Cascais',
    companyName: 'M&M Mobile Solutions',
  },
  {
    name: 'Martim Bello',
    phone: '+351 914 205 333',
    address: 'Rua dos Panucas 200, Estremoz',
    companyName: 'M&M Mobile Solutions',
  },
];

const MyCardsArea = () => {
  LogBox.ignoreLogs([
    'Warning: Cannot update a component from inside the function body of a different component.',
  ]);
  const [cardIndex, setCardIndex] = useState(0);
  const handleIndexChange = (i) => {
    setCardIndex(i);
  };
  return (
    <>
      <HeaderSearch />
      <Text style={Styles.titleStyles}>My Cards</Text>
      <View style={Styles.outsideContainer}>
        <Swipper data={dataObj} onChangeIndex={handleIndexChange} />
        <CardForm data={dataObj[cardIndex]} />
      </View>
    </>
  );
};
export default MyCardsArea;
