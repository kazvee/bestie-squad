import { combineReducers } from 'redux';
import besties from './besties_reducer';
import squad from './squad_reducer';

const rootReducer = combineReducers({
  besties,
  squad,
});

export default rootReducer;
