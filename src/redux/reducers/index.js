import { combineReducers } from 'redux';
import items from './Items';
import theme from './Theme';

const reducers = {
  items,
  theme
};

export default combineReducers(reducers);
