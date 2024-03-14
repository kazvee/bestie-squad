import { ADD_BESTIE, REMOVE_BESTIE } from '../actions';
import besties_json from '../data/besties.json';
import { createBestie } from './helpers';

function besties(state = besties_json, action) {
  let besties;
  switch (action.type) {
    case ADD_BESTIE:
      besties = state.filter((item) => item.id !== action.id);
      return besties;
    case REMOVE_BESTIE:
      besties = [...state, createBestie(action.id)];
      return besties;
    default:
      return state;
  }
}

export default besties;
