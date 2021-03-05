import {
  ADD_CARD,
  DELETE_CARD,
  FECTH_CARDS,
  FILTER_CARDS,
  CURRENT_CARD,
} from './cardsConstants';
import {sharedCards} from '../sharedCards';
import {addSharedCard} from '../addSharedCard';
import {deleteSharedCard} from '../deleteSharedCard';
import {
  getFromStore,
  parseData,
  parseError,
  storeItems,
} from '../../functions/functions';

export function filterCards(data) {
  return {type: FILTER_CARDS, payload: data};
}

export function changeShownCard(card) {
  return {type: CURRENT_CARD, payload: card};
}

export function loadCards(navigation, networkConnection, setLoading, setError) {
  return async function (dispatch) {
    try {
      let cards;
      if (networkConnection) {
        cards = await sharedCards();
        cards = parseData(cards.data);
      } else {
        cards = await getFromStore('sharedCards');
        cards = JSON.parse(cards);
      }
      if (networkConnection) storeItems('sharedCards', JSON.stringify(cards));
      setLoading(false);
      dispatch({type: FECTH_CARDS, payload: cards});
    } catch (error) {
      console.log(error);
      setError(parseError(error, navigation), {
        cancelButtonTest: 'Retry',
        onClose: () => {
          setError(null);
          //dispatch(loadCards(navigation, networkConnection));
        },
      });
    }
  };
}

export function addCard(cardId, allCards, navigation, setLoading, setError) {
  return async function (dispatch) {
    setLoading(true);
    try {
      let newCard = await addSharedCard(cardId);
      newCard = parseData([newCard.data])[0];
      let sharedCards = [...allCards];
      sharedCards.push(newCard);
      storeItems('sharedCards', JSON.stringify(sharedCards));
      dispatch({type: ADD_CARD, payload: newCard});
      setLoading(false);
    } catch (error) {
      setError(parseError(error, navigation), {
        cancelButtonTest: 'Ok',
        onClose: () => {
          setError(null);
        },
      });
    }
  };
}

export function deleteCard(card, allCards, navigation, setLoading, setError) {
  return async function (dispatch) {
    setLoading(true);
    try {
      const userId = card.userId;
      await deleteSharedCard(userId);
      let filteredCards = [...allCards];
      filteredCards = filteredCards.filter((card) => {
        return card.userId != userId;
      });
      storeItems('sharedCards', JSON.stringify(filteredCards));
      dispatch({type: DELETE_CARD, payload: filteredCards});
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(parseError(error, navigation), {
        cancelButtonTest: 'Ok',
        onClose: () => {
          setError(null);
        },
      });
    }
  };
}
