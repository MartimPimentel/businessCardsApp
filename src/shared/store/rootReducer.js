import {combineReducers} from 'redux';
import asyncReducer from '../async/asyncReducer';
import cardsReducer from '../api/redux/cardsReducer';
import modalReducer from '../../components/shared/Modal/modalReducer';
const rootReducer = combineReducers({
  cards: cardsReducer,
  modals: modalReducer,
  async: asyncReducer,
});

export default rootReducer;
