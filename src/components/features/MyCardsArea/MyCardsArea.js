import React, {useEffect, useState} from 'react';
import {View, Text, LogBox} from 'react-native';
import Swipper from './components/Swipper/Swipper';
import Styles from './MyCardAreaStyles';
import HeaderSearch from './components/Header/HeaderSearch';
import CardForm from './components/CardForm/CardForm';
import {data} from '../../../shared/mockData/mockData';

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
        <Swipper data={data} onChangeIndex={handleIndexChange} />
        <CardForm data={data[cardIndex]} />
      </View>
    </>
  );
};
export default MyCardsArea;
