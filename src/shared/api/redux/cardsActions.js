import {ADD_CARD, DELETE_CARD, FECTH_CARDS} from './cardsConstants';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../async/asyncReducer';

export function loadEvents() {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const events = []; /* await fetchSampleData(); */
      dispatch({type: FECTH_CARDS, payload: events});
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
}

export function addCard(event) {
  return {type: ADD_CARD, payload: event};
}

export function deleteCard(eventId) {
  return {type: DELETE_CARD, payload: eventId};
}
