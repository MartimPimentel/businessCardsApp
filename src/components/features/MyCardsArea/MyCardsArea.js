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
import {
  useIsFocused,
  useNavigation,
  CommonActions,
} from '@react-navigation/native';
import Modal from '../../shared/Modal/Modal';
import {deleteToken, parseData} from '../../../shared/functions/functions';
import SInfo from 'react-native-sensitive-info';
import {deleteSharedCard} from '../../../shared/api/deleteSharedCard';
const storeData = async (data) => {
  await SInfo.setItem('sharedCards', JSON.stringify(data), {
    sharedPreferencesName: 'bussinessCards',
    keychainService: 'bussinessCards',
  });
};

//use when offline
const getStoredCards = async () => {
  try {
    const cards = await SInfo.getItem('sharedCards', {
      sharedPreferencesName: 'bussinessCards',
      keychainService: 'bussinessCards',
    });
    if (cards) return JSON.parse(cards);
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const MyCardsArea = () => {
  /* LogBox.ignoreLogs([
    'Warning: Cannot update a component from inside the function body of a different component.',
  ]); */
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(true);
  const [cardIndex, setCardIndex] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [isFlipped, setFlipped] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [dbError, setError] = useState(null);
  const [isOpened, setIsOpened] = useState(false);
  const handleIndexChange = (i) => {
    setCardIndex(i);
  };
  let allData = [];

  const handleDeleteDecison = (response) => {
    if (response == 'yes') {
      setCardIndex(-1);
      let newData = [...filteredData];
      const sharedUserId = filteredData[cardIndex].userId;
      newData.splice(cardIndex, 1);
      setFilteredData(newData);
      deleteSharedCard(sharedUserId).catch((error) => {
        const errors = JSON.parse(error.request.response);
        console.log(errors);
        if (!!errors.error.match('Token')) {
          deleteToken()
            .then(() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{name: 'NotAuth'}],
                }),
              );
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          setError(errors);
        }
      });
    }
    setFlipped(false);
  };
  const onHandleAddCardQRCode = () => {
    //TO DO
  };
  const onHandleAddCardLink = () => {
    //TO DO
  };
  const getCards = () => {
    setLoading(true);
    setError(null);
    sharedCards()
      .then((res) => {
        allData = parseData(res.data);
        storeData(allData);
        setFilteredData(allData);
        setLoading(false);
      })
      .catch((error) => {
        const errors = JSON.parse(error.request.response);
        console.log(errors);
        if (!!errors.error.match('Token')) {
          setLoading(false);
          deleteToken()
            .then(() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{name: 'NotAuth'}],
                }),
              );
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          setLoading(false);
          setError(errors);
        }
      });
  };
  useEffect(() => {
    getCards();
    setIsOpened(true);
  }, []);
  useEffect(() => {
    if (isFocused && isOpened) {
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
          <FloatingAddButton
            handleQRCode={onHandleAddCardQRCode}
            handleLink={onHandleAddCardLink}
          />
        </>
      )}
    </View>
  );
};
export default MyCardsArea;
