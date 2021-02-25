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
import {openModal} from '../../shared/Modal/modalReducer';

const MyCardsArea = () => {
  const dispatch = useDispatch();
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [isFlipped, setFlipped] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [openScanner, setOpenScanner] = useState(false);
  const [searchBarOpened, setSearchBarOpened] = useState(false);
  const [actionsOpened, setActionsOpened] = useState(false);

  const {loading, error} = useSelector((state) => state.async);
  const {cards, currentCard} = useSelector((state) => state.cards);

  const handleDeleteDecison = (response) => {
    setFlipped(false);
    if (netInfo.isConnected) {
      if (response == 'yes') {
        setSearchBarOpened(false);
        dispatch(deleteCard(currentCard, cards, navigation));
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
  const onHandleAddCard = ({data}) => {
    setOpenScanner(false);
    setSearchBarOpened(false);
    dispatch(addCard(data, cards, navigation));
  };

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
          overlayOpened={(value) => {
            setOverlay(true);
          }}
        />

        <View style={{zIndex: overlay ? -99 : -100, height: '100%'}}>
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
                frontView={<Swipper />}
                backView={
                  <DeleteCard
                    handleDeleteDecison={handleDeleteDecison}></DeleteCard>
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
                    Share.share({message: currentCard.userId});
                  }}>
                  <ShareGivenCardIcon />
                </TouchableOpacity>
              </View>
              <CardForm />
            </View>
          ) : (
            !loading &&
            netInfo.isConnected != null && (
              <View style={Styles.noInfoContainer}>
                <Text style={Styles.noInfoTextStyles}>No cards available</Text>
              </View>
            )
          )}
        </View>
      </TouchableWithoutFeedback>
      {!loading && !error && (
        <FloatingAddButton
          isOpen={actionsOpened}
          onChangeIsOpen={(value) => setActionsOpened(value)}
          handleLink={() => {
            if (netInfo.isConnected) {
              dispatch(
                openModal({
                  modalType: 'TagModal',
                  modalProps: {
                    headerText: 'Insert the tag',
                    actionButtonText: 'Add',
                    cancelButtonTest: 'Cancel',
                    onAction: (userId) => {
                      onHandleAddCard({data: userId});
                    },
                  },
                }),
              );
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
        />
      )}
      {openScanner && (
        <View style={{position: 'absolute'}}>
          <QRCodeScanner
            onRead={onHandleAddCard}
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
