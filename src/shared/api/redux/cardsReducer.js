import {
  ADD_CARD,
  DELETE_CARD,
  FECTH_CARDS,
  FILTER_CARDS,
  CURRENT_CARD,
} from './cardsConstants';

const initialState = {cards: [], filteredCards: [], currentCard: null};

export default function cardsReducer(state = initialState, {type, payload}) {
  switch (type) {
    case ADD_CARD:
      const allCards = [...state.cards, payload];
      return {
        ...state,
        cards: allCards,
        filteredCards: allCards,
        currentCard: allCards?.length > 0 ? allCards[0] : null,
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: payload,
        filteredCards: payload,
        currentCard: payload?.length > 0 ? payload[0] : null,
      };
    case FECTH_CARDS:
      return {
        ...state,
        cards: payload,
        filteredCards: payload,
        currentCard: payload?.length > 0 ? payload[0] : null,
      };
    case FILTER_CARDS:
      return {
        ...state,
        filteredCards: payload,
        currentCard: payload?.length > 0 ? payload[0] : null,
      };
    case CURRENT_CARD:
      return {
        ...state,
        currentCard: payload,
      };
    default:
      return state;
  }
}
