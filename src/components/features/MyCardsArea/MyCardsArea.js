import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Share} from 'react-native';
import Swipper from './components/Swipper/Swipper';
import Styles from './MyCardAreaStyles';
import HeaderSearch from './components/Header/HeaderSearch';
import CardForm from './components/CardForm/CardForm';
import {RemoveCardIcon, ShareGivenCardIcon} from '../../../assets/icons';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
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
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import LinearGradient from 'react-native-linear-gradient';
import {addSharedCard} from '../../../shared/api/addSharedCard';
import {useNetInfo} from '@react-native-community/netinfo';

const storeData = async (data) => {
  try {
    await SInfo.setItem('sharedCards', JSON.stringify(data), {
      sharedPreferencesName: 'bussinessCards',
      keychainService: 'bussinessCards',
    });
  } catch (e) {
    console.log('ERROR->', e);
  }
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
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(true);
  const [cardIndex, setCardIndex] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [isFlipped, setFlipped] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [dbError, setError] = useState(null);
  const [openScanner, setOpenScanner] = useState(false);
  const [allData, setAllData] = useState([]);
  const [searchBarOpened, setSearchBarOpened] = useState(false);
  const [actionsOpened, setActionsOpened] = useState(false);

  const handleIndexChange = (i) => {
    setCardIndex(i);
  };

  const handleDeleteDecison = (response) => {
    setFlipped(false);
    if (netInfo.isConnected) {
      if (response == 'yes') {
        setSearchBarOpened(false);
        setCardIndex(-1);
        let newData = [...allData];
        const sharedUserId = filteredData[cardIndex].userId;
        newData = newData.filter((card) => {
          return card.userId != sharedUserId;
        });
        setFilteredData(newData);
        setAllData(newData);
        storeData(newData);
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
    } else {
      setError({
        message:
          'You are currently offline. Go online do be able do delete a card.',
      });
    }
  };
  const onHandleAddCardQRCode = ({data}) => {
    setOpenScanner(false);
    setSearchBarOpened(false);
    setLoading(true);
    addSharedCard(data)
      .then((res) => {
        const newCard = parseData([res.data]);
        let sharedCopy = [...allData];
        sharedCopy.push(newCard[0]);
        setAllData(sharedCopy);
        storeData(sharedCopy);
        setFilteredData(sharedCopy);
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
  const onHandleAddCardLink = () => {
    //TO DO
  };
  const getCards = () => {
    setLoading(true);
    setError(null);
    sharedCards()
      .then((res) => {
        const parsedData = parseData(res.data);
        setAllData(parsedData);
        storeData(parsedData);
        setFilteredData(parsedData);
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
    if (isFocused) {
      setCardIndex(-1);
    }
  }, [isFocused]);

  useEffect(() => {
    if (netInfo.isConnected != null) {
      if (netInfo.isConnected) {
        getCards();
      } else {
        setLoading(true);
        setError(null);
        getStoredCards()
          .then((cards) => {
            setAllData(cards);
            storeData(cards);
            setFilteredData(cards);
            setLoading(false);
          })
          .catch((err) => {
            setError(err);
            setLoading(false);
          });
      }
    }
  }, [netInfo.isConnected]);

  useEffect(() => {
    if (overlay) setOverlay(false);
  }, [overlay]);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => setActionsOpened(false)}
        style={{height: '100%'}}>
        <HeaderSearch
          openSearchBar={searchBarOpened}
          onChangeHeader={(value) => setSearchBarOpened(value)}
          data={allData}
          handleFilter={(filtered) => {
            filtered != []
              ? setFilteredData(filtered)
              : setFilteredData(allData);
          }}
          overlayOpened={(value) => {
            setOverlay(true);
          }}
        />

        {loading ? (
          <Spinner />
        ) : dbError ? (
          <Modal
            cancelButtonTest={netInfo.isConnected ? 'Reload' : 'Ok'}
            isVisible={dbError}
            onClose={() => {
              setError(null);
              if (netInfo.isConnected) getCards();
            }}
            header={
              <Text style={{fontFamily: 'Nunito-Regular', fontSize: 20}}>
                Error
              </Text>
            }
            body={
              <Text
                style={{fontSize: 15, textAlign: 'center', letterSpacing: 1}}>
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
              </View>

              {filteredData && filteredData[0] ? (
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
                          handleDeleteDecison={
                            handleDeleteDecison
                          }></DeleteCard>
                      </View>
                    }
                  />
                  <View style={Styles.actionButtonsContainer}>
                    <TouchableOpacity
                      disabled={
                        !(!isFlipped && filteredData && filteredData[0])
                      }
                      style={Styles.deleteButtonStyles}
                      onPress={() => {
                        setFlipped(!isFlipped);
                      }}>
                      <RemoveCardIcon />
                    </TouchableOpacity>
                    <TouchableOpacity
                      disabled={
                        !(!isFlipped && filteredData && filteredData[0])
                      }
                      onPress={() => {
                        Share.share({message: filteredData[cardIndex].userId});
                      }}>
                      <ShareGivenCardIcon />
                    </TouchableOpacity>
                  </View>
                  <CardForm
                    data={filteredData[cardIndex == -1 ? 0 : cardIndex]}
                  />
                </View>
              ) : (
                <View style={Styles.noInfoContainer}>
                  <Text style={Styles.noInfoTextStyles}>
                    No cards available
                  </Text>
                </View>
              )}
            </View>
          </>
        )}
      </TouchableWithoutFeedback>
      {!loading && !dbError && (
        <FloatingAddButton
          isOpen={actionsOpened}
          onChangeIsOpen={(value) => setActionsOpened(value)}
          handleQRCode={() => {
            if (netInfo.isConnected) {
              setOpenScanner(true);
            } else {
              setError({
                message:
                  'You are currently offline. Go online to be able do add new cards.',
              });
            }
          }}
          handleLink={onHandleAddCardLink}
        />
      )}
      {openScanner && (
        <View style={{position: 'absolute'}}>
          <QRCodeScanner
            onRead={onHandleAddCardQRCode}
            flashMode={RNCamera.Constants.FlashMode.auto}
            showMarker
            markerStyle={{borderColor: '#A9E2FD'}}
            bottomContent={
              <TouchableOpacity
                style={{top: 10}}
                onPress={() => setOpenScanner(false)}>
                <LinearGradient
                  style={Styles.closeScannerContainer}
                  colors={['#A9E2FD', '#8AB1F2']}>
                  <Text style={{color: 'white'}}>Close</Text>
                </LinearGradient>
              </TouchableOpacity>
            }
          />
        </View>
      )}
    </>
  );
};
export default MyCardsArea;
