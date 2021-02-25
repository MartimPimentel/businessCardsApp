import {ADD_CARD, DELETE_CARD, FECTH_CARDS} from './cardsConstants';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../async/asyncReducer';
import {sharedCards} from '../sharedCards';
import {
  getFromStore,
  parseData,
  parseError,
  storeItems,
} from '../../functions/functions';

export function loadCards(navigation) {
  return async function (dispatch) {
    const netInfo = false;
    dispatch(asyncActionStart());
    try {
      let cards;
      if (netInfo.isConnected) {
        cards = await sharedCards();
        cards = parseData(cards.data);
      } else {
        cards = await getFromStore('sharedCards');
        cards = JSON.parse(cards);
      }

      if (netInfo.isConnected) storeItems('sharedCards', JSON.stringify(cards));
      dispatch({type: FECTH_CARDS, payload: cards});
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError(parseError(error, navigation)));
    }
  };
}

export function addCard(event) {
  return {type: ADD_CARD, payload: event};
}

export function deleteCard(eventId) {
  return {type: DELETE_CARD, payload: eventId};
}
