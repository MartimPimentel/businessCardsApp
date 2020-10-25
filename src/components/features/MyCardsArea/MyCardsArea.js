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
  const [filteredData, setFilteredData] = useState(data);
  const handleIndexChange = (i) => {
    setCardIndex(i);
  };
  const allData = data;
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    if (overlay) setOverlay(false);
  }, [overlay]);
  return (
    <View>
      <HeaderSearch
        data={data}
        handleFilter={(filtered) => {
          filtered != [] ? setFilteredData(filtered) : setFilteredData(allData);
        }}
        overlayOpened={(value) => {
          setOverlay(true);
        }}
      />
      <View style={{zIndex: overlay ? -99 : -100}}>
        <Text style={Styles.titleStyles}>My Cards</Text>

        {filteredData[0] ? (
          <View style={Styles.outsideContainer}>
            <Swipper data={filteredData} onChangeIndex={handleIndexChange} />
            <CardForm data={filteredData[cardIndex]} />
          </View>
        ) : (
          <View style={Styles.noInfoContainer}>
            <Text style={Styles.noInfoTextStyles}>
              No results to your search
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default MyCardsArea;
