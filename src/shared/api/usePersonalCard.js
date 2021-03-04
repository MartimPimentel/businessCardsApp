import api from './api';
import NetInfo from '@react-native-community/netinfo';
import {getFromStore, storeItems} from '../functions/functions';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../async/asyncReducer';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

export function usePersonalCard({error: initErrorVal}) {
  const dispatch = useDispatch();
  const [card, setCard] = useState(undefined);
  const [error, setError] = useState(initErrorVal);
  const getPersonalCard = async function () {
    const netInfo = await NetInfo.fetch();

    dispatch(asyncActionStart());
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
        const cardData = res.data;

        storeItems('personalCard', JSON.stringify(cardData));
        dispatch(asyncActionFinish());
        setCard(cardData);
        setError(false);
      } catch (error) {
        const errors = JSON.parse(error.request.response);
        console.log(errors);
        dispatch(
          asyncActionError(
            errors,
            !errors?.error.match('Credentials')
              ? {
                  cancelButtonTest: 'Retry',
                  onClose: () => {
                    dispatch(asyncActionError(null));
                  },
                }
              : null,
          ),
        );
        setError(true);
      }
    } else {
      let cardData = await getFromStore('personalCard');
      if (card) cardData = JSON.parse(card);
      else cardData = undefined;
      dispatch(asyncActionFinish());
      setCard(cardData);
    }
  };
  return {card: card, error: error, getPersonalCard: getPersonalCard};
}
