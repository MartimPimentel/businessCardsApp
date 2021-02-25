import React, {useEffect, useState} from 'react';
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
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {parseError, storeItems} from '../../../shared/functions/functions';
import {deleteSharedCard} from '../../../shared/api/deleteSharedCard';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import LinearGradient from 'react-native-linear-gradient';
import {useNetInfo} from '@react-native-community/netinfo';
import {useSelector, useDispatch} from 'react-redux';
import {
  asyncActionError,
  asyncActionStart,
} from '../../../shared/async/asyncReducer';
import {
  addCard,
  deleteCard,
  loadCards,
} from '../../../shared/api/redux/cardsActions';

const MyCardsArea = () => {
  const dispatch = useDispatch();
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setFlipped] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [openScanner, setOpenScanner] = useState(false);
  const [searchBarOpened, setSearchBarOpened] = useState(false);
  const [actionsOpened, setActionsOpened] = useState(false);

  const {loading, error} = useSelector((state) => state.async);
  const {cards} = useSelector((state) => state.cards);

  const handleIndexChange = (i) => {
    setCardIndex(i);
  };

  const handleDeleteDecison = (response) => {
    setFlipped(false);
    if (netInfo.isConnected) {
      if (response == 'yes') {
        setSearchBarOpened(false);
        setCardIndex(-1);
        dispatch(deleteCard(cardIndex, cards, navigation));
      }
    } else {
      dispatch(
        asyncActionError(
          {
            message:
              'You are currently offline. Go online do be able do delete a card.',
          },
          {
            cancelButtonTest: 'Ok',
            onClose: () => {
              dispatch(asyncActionError(null));
            },
          },
        ),
      );
    }
  };
  const onHandleAddCardQRCode = ({data}) => {
    setOpenScanner(false);
    setSearchBarOpened(false);
    dispatch(addCard(data, cards, navigation));
  };
  const onHandleAddCardLink = () => {};

  useEffect(() => {
    if (isFocused) {
      setCardIndex(-1);
    }
  }, [isFocused]);

  useEffect(() => {
    dispatch(asyncActionStart());
    if (netInfo.isConnected != null) {
      dispatch(loadCards(navigation, netInfo.isConnected));
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
          data={cards}
          handleFilter={(filtered) => {
            //filtered != [] ? setFilteredData(filtered) : setFilteredData(cards);
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
          </View>

          {cards?.length > 0 ? (
            <View style={Styles.outsideContainer}>
              <FlipComponent
                useNativeDriver={true}
                isFlipped={isFlipped}
                frontView={
                  <View>
                    <Swipper
                      index={cardIndex}
                      data={cards}
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
              <View style={Styles.actionButtonsContainer}>
                <TouchableOpacity
                  disabled={!(!isFlipped && cards?.length > 0)}
                  style={Styles.deleteButtonStyles}
                  onPress={() => {
                    setFlipped(!isFlipped);
                  }}>
                  <RemoveCardIcon />
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={!(!isFlipped && cards?.length > 0)}
                  onPress={() => {
                    Share.share({message: cards[cardIndex].userId});
                  }}>
                  <ShareGivenCardIcon />
                </TouchableOpacity>
              </View>
              <CardForm data={cards[cardIndex == -1 ? 0 : cardIndex]} />
            </View>
          ) : (
            <View style={Styles.noInfoContainer}>
              <Text style={Styles.noInfoTextStyles}>No cards available</Text>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
      {!loading && !error && (
        <FloatingAddButton
          isOpen={actionsOpened}
          onChangeIsOpen={(value) => setActionsOpened(value)}
          handleQRCode={() => {
            if (netInfo.isConnected) {
              setOpenScanner(true);
            } else {
              dispatch(
                asyncActionError(
                  {
                    message:
                      'You are currently offline. Go online to be able do add new cards.',
                  },
                  {
                    cancelButtonTest: 'Ok',
                    onClose: () => {
                      dispatch(asyncActionError(null));
                    },
                  },
                ),
              );
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
