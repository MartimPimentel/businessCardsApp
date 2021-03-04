import api from './api';
import NetInfo from '@react-native-community/netinfo';
import {getFromStore, parseData, storeItems} from '../functions/functions';
import {useContext, useState} from 'react';
import {AsyncContext} from '../providers/asyncProvider';

export function usePersonalCard() {
  const [card, setCard] = useState(undefined);
  const {setLoading, setError} = useContext(AsyncContext);
  const getPersonalCard = async function () {
    const netInfo = await NetInfo.fetch();
    setLoading(true);
    if (netInfo.isConnected) {
      try {
        const res = await getFromStore('token').then(async (token) => {
          return await api.post(
            '/get_card',
            {},
            {
              headers: {Token: token},
            },
          );
        });
        const cardData = parseData(res.data);

        storeItems('personalCard', JSON.stringify(cardData));
        setCard(cardData);
        setLoading(false);
        setError(false);
      } catch (error) {
        const errors = JSON.parse(error.request.response);
        console.log(errors);
        setError(
          errors,
          !errors?.error.match('Credentials')
            ? {
                cancelButtonTest: 'Retry',
                onClose: () => {
                  setError(null);
                },
              }
            : null,
        );
        setError(true);
      }
    } else {
      let cardData = await getFromStore('personalCard');
      if (card) cardData = JSON.parse(card);
      else cardData = undefined;
      setCard(cardData);
      setLoading(false);
    }
  };
  return {card: card, getPersonalCard: getPersonalCard};
}
