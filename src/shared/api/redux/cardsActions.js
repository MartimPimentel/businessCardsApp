import {ADD_CARD, DELETE_CARD, FECTH_CARDS} from './cardsConstants';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../async/asyncReducer';
import {sharedCards} from '../sharedCards';
import {addSharedCard} from '../addSharedCard';
import {deleteSharedCard} from '../deleteSharedCard';
import {
  getFromStore,
  parseData,
  parseError,
  storeItems,
} from '../../functions/functions';

export function loadCards(navigation, networkConnection) {
  return async function (dispatch) {
    //dispatch(asyncActionStart());
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
      dispatch({type: FECTH_CARDS, payload: cards});
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError(parseError(error, navigation)));
    }
  };
}

export function addCard(cardId, allCards, navigation) {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      let newCard = await addSharedCard(cardId);
      newCard = parseData([newCard.data])[0];
      let sharedCards = [...allCards];
      sharedCards.push(newCard);
      storeItems('sharedCards', JSON.stringify(sharedCards));
      dispatch({type: ADD_CARD, payload: newCard});
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError(parseError(error, navigation)));
    }
  };
}

export function deleteCard(cardIdx, allCards, navigation) {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const userId = allCards[cardIdx].userId;
      await deleteSharedCard(userId);
      let filteredCards = [...allCards];
      filteredCards = filteredCards.filter((card) => {
        return card.userId != userId;
      });
      storeItems('sharedCards', JSON.stringify(filteredCards));
      dispatch({type: DELETE_CARD, payload: filteredCards});
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError(parseError(error, navigation)));
    }
  };
}
