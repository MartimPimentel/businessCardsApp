import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import Swipper from './components/Swipper/Swipper';
import Styles from './MyCardAreaStyles';
import HeaderSearch from './components/Header/HeaderSearch';
import CardForm from './components/CardForm/CardForm';
import {data} from '../../../shared/mockData/mockData';
import {RemoveCardIcon} from '../../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FlipComponent from 'react-native-flip-component';
import DeleteCard from './components/DeleteCard/DeleteCard';
import FloatingAddButton from '../../shared/FloatingAddButton/FloatingAddButton';
import {sharedCards} from '../../../shared/api/sharedCards';
import Spinner from '../../shared/Spinner/Spinner';
import {useIsFocused} from '@react-navigation/native';
import Modal from '../../shared/Modal/Modal';
const MyCardsArea = () => {
  /* LogBox.ignoreLogs([
    'Warning: Cannot update a component from inside the function body of a different component.',
  ]); */
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(true);
  const [cardIndex, setCardIndex] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [isFlipped, setFlipped] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [dbError, setError] = useState(null);

  const handleIndexChange = (i) => {
    setCardIndex(i);
  };
  let allData = [];

  const handleDeleteDecison = (response) => {
    if (response == 'yes') {
      let newData = [...filteredData];
      newData.splice(cardIndex, 1);
      setFilteredData(newData);
    }
    setFlipped(false);
  };
  const onHandleAddCard = () => {
    //TO DO
  };
  const getCards = () => {
    setLoading(true);
    setError(null);
    sharedCards()
      .then((res) => {
        console.log(res.data);
        allData = res.data;
        setFilteredData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        const errors = JSON.parse(error.request.response);
        console.log(errors);
        setLoading(false);
        setError(errors);
      });
  };
  useEffect(() => {
    getCards();
  }, []);
  useEffect(() => {
    if (isFocused) {
      setFilteredData(allData);
      setCardIndex(-1);
    }
  }, [isFocused]);
  useEffect(() => {
    if (overlay) setOverlay(false);
  }, [overlay]);
  return (
    <View style={{height: '100%'}}>
      <HeaderSearch
        data={data}
        handleFilter={(filtered) => {
          filtered != [] ? setFilteredData(filtered) : setFilteredData(allData);
        }}
        overlayOpened={(value) => {
          setOverlay(true);
        }}
      />

      {loading ? (
        <Spinner />
      ) : dbError ? (
        <Modal
          cancelButtonTest="Reload"
          isVisible={dbError}
          onClose={() => {
            setError(null);
            getCards();
          }}
          header={
            <Text style={{fontFamily: 'Nunito-Regular', fontSize: 20}}>
              Error
            </Text>
          }
          body={
            <Text style={{fontSize: 15, textAlign: 'center', letterSpacing: 1}}>
              {dbError && dbError.message}
            </Text>
          }
        />
      ) : (
        <>
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
                        index={cardIndex}
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
                <CardForm
                  data={filteredData[cardIndex == -1 ? 0 : cardIndex]}
                />
              </View>
            ) : (
              <View style={Styles.noInfoContainer}>
                <Text style={Styles.noInfoTextStyles}>No cards available</Text>
              </View>
            )}
          </View>
          <FloatingAddButton onPress={onHandleAddCard} />
        </>
      )}
    </View>
  );
};
export default MyCardsArea;
