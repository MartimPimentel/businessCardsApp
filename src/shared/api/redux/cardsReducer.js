import {ADD_CARD, DELETE_CARD, FECTH_CARDS} from './cardsConstants';

const initialState = {cards: []};

export default function cardsReducer(state = initialState, {type, payload}) {
  switch (type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, payload],
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: [...state.cards.filter((card) => card.userId !== payload)],
      };
    case FECTH_CARDS:
      return {...state, cards: payload};
    default:
      return state;
  }
}
