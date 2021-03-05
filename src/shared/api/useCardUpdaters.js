import api from './api';
import NetInfo from '@react-native-community/netinfo';
import {getFromStore, parseError, storeItems} from '../functions/functions';
import {useContext} from 'react';
import {AsyncContext} from '../providers/AsyncProvider';

export function useCardUpdaters() {
  const {setLoading, setError} = useContext(AsyncContext);
  const dispatchOffline = () => {
    setError(
      {
        message:
          'You are currently offline. Go online to be able do add new cards.',
      },
      {
        cancelButtonTest: 'Ok',
        onClose: () => {
          setError(null);
        },
      },
    );
  };
  const createCard = async function (cardData, navigation) {
    const netInfo = await NetInfo.fetch();
    if (netInfo.isConnected) {
      setLoading(true);
      try {
        await getFromStore('token').then(async (token) => {
          return await api.post('/create_card', cardData, {
            headers: {Token: token},
          });
        });
        await storeItems('personalCard', JSON.stringify(cardData));
        setLoading(false);
        navigation.push('CardCreatedArea', {cardData: cardData});
      } catch (error) {
        console.log(error);
        setError(parseError(error, navigation), {
          cancelButtonTest: 'Ok',
          onClose: () => {
            setError(null);
          },
        });
      }
    } else {
      dispatchOffline();
    }
  };

  const editCard = async function (cardData, navigation) {
    const netInfo = await NetInfo.fetch();
    if (netInfo.isConnected) {
      setLoading(true);
      try {
        await getFromStore('token').then(async (token) => {
          console.log('api', token, cardData);
          return await api.post('/edit_card', cardData, {
            headers: {Token: token},
          });
        });
        await storeItems('personalCard', JSON.stringify(cardData));
        setLoading(false);
        navigation.push('CardCreatedArea', {cardData: cardData});
      } catch (error) {
        console.log(error.request.response);
        setError(parseError(error, navigation), {
          cancelButtonTest: 'Ok',
          onClose: () => {
            setError(null);
          },
        });
      }
    } else {
      dispatchOffline();
    }
  };
  const deleteCard = async function (navigation) {
    const netInfo = await NetInfo.fetch();
    if (netInfo.isConnected) {
      setLoading(true);
      try {
        await getFromStore('token').then(async (token) => {
          return await api.post('/delete_card', {}, {headers: {Token: token}});
        });
        setLoading(false);
        navigation.push('NoCardArea', undefined);
      } catch (error) {
        console.log(error);
        setError(parseError(error, navigation), {
          cancelButtonTest: 'Ok',
          onClose: () => {
            setError(null);
          },
        });
      }
    } else {
      dispatchOffline();
    }
  };

  return {editCard: editCard, createCard: createCard, deleteCard: deleteCard};
}
