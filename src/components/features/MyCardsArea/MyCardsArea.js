import React, {useEffect, useState} from 'react';
import {View, Text, LogBox} from 'react-native';
import Swipper from './components/Swipper/Swipper';
import Styles from './MyCardAreaStyles';
import HeaderSearch from './components/Header/HeaderSearch';
import CardForm from './components/CardForm/CardForm';
import {data} from '../../../shared/mockData/mockData';
import {RemoveCardIcon} from '../../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FlipComponent from 'react-native-flip-component';
import DeleteCard from './components/DeleteCard/DeleteCard';
const MyCardsArea = () => {
  LogBox.ignoreLogs([
    'Warning: Cannot update a component from inside the function body of a different component.',
  ]);
  const [cardIndex, setCardIndex] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [isFlipped, setFlipped] = useState(false);

  const handleIndexChange = (i) => {
    setCardIndex(i);
  };
  const allData = data;
  const [overlay, setOverlay] = useState(false);
  const handleDeleteDecison = (response) => {
    if (response == 'yes') {
      let newData = [...filteredData];
      newData.splice(cardIndex, 1);
      setFilteredData(newData);
    }
    setFlipped(false);
  };

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
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            alignSelf: 'center',
            width: '100%',
          }}>
          <View style={{marginLeft: '40%'}}>
            <Text style={Styles.titleStyles}>My Cards</Text>
          </View>
          {!isFlipped && filteredData[0] && (
            <View style={{marginLeft: '22%'}}>
              <TouchableOpacity
                style={{width: 30}}
                onPress={() => {
                  setFlipped(!isFlipped);
                }}>
                <RemoveCardIcon />
              </TouchableOpacity>
            </View>
          )}
        </View>

        {filteredData[0] ? (
          <View style={Styles.outsideContainer}>
            <FlipComponent
              useNativeDriver={true}
              isFlipped={isFlipped}
              frontView={
                <View>
                  <Swipper
                    data={filteredData}
                    onChangeIndex={handleIndexChange}
                  />
                </View>
              }
              backView={
                <View>
                  <DeleteCard
                    handleDeleteDecison={handleDeleteDecison}></DeleteCard>
                </View>
              }
            />
            <CardForm data={filteredData[cardIndex]} />
          </View>
        ) : (
          /* <View style={Styles.outsideContainer}>
            <Swipper data={filteredData} onChangeIndex={handleIndexChange} />
            <CardForm data={filteredData[cardIndex]} />
          </View> */
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
