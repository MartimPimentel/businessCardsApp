import api from './api';
import {useNavigation} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../async/asyncReducer';
import {useDispatch} from 'react-redux';
import {getFromStore, parseError, storeItems} from '../functions/functions';

export function useCardUpdaters() {
  const dispatch = useDispatch();

  const dispatchOffline = () => {
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
  };
  const createCard = async function (cardData, navigation) {
    const netInfo = await NetInfo.fetch();
    if (netInfo.isConnected) {
      dispatch(asyncActionStart());
      try {
        await getFromStore('token').then(async (token) => {
          return await api.post('/create_card', cardData, {
            headers: {Token: token},
          });
        });
        await storeItems('personalCard', JSON.stringify(cardData));
        dispatch(asyncActionFinish());
        navigation.push('CardCreatedArea', {cardData: cardData});
      } catch (error) {
        console.log(error);
        dispatch(
          asyncActionError(parseError(error, navigation), {
            cancelButtonTest: 'Ok',
            onClose: () => {
              dispatch(asyncActionError(null));
            },
          }),
        );
      }
    } else {
      dispatchOffline();
    }
  };

  const editCard = async function (cardData, navigation) {
    const netInfo = await NetInfo.fetch();
    if (netInfo.isConnected) {
      dispatch(asyncActionStart());
      try {
        await getFromStore('token').then(async (token) => {
          console.log('api', token, cardData);
          return await api.post('/edit_card', cardData, {
            headers: {Token: token},
          });
        });
        await storeItems('personalCard', JSON.stringify(cardData));
        dispatch(asyncActionFinish());
        navigation.push('CardCreatedArea', {cardData: cardData});
      } catch (error) {
        console.log(error.request.response);
        dispatch(
          asyncActionError(parseError(error, navigation), {
            cancelButtonTest: 'Ok',
            onClose: () => {
              dispatch(asyncActionError(null));
            },
          }),
        );
      }
    } else {
      dispatchOffline();
    }
  };
  const deleteCard = async function (navigation) {
    const netInfo = await NetInfo.fetch();
    if (netInfo.isConnected) {
      dispatch(asyncActionStart());
      try {
        await getFromStore('token').then(async (token) => {
          return await api.post('/delete_card', {}, {headers: {Token: token}});
        });
        dispatch(asyncActionFinish());
        navigation.push('NoCardArea', undefined);
      } catch (error) {
        console.log(error);
        dispatch(
          asyncActionError(parseError(error, navigation), {
            cancelButtonTest: 'Ok',
            onClose: () => {
              dispatch(asyncActionError(null));
            },
          }),
        );
      }
    } else {
      dispatchOffline();
    }
  };

  return {editCard: editCard, createCard: createCard, deleteCard: deleteCard};
}
