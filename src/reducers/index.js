import { ADD_BESTIE } from '../actions';
import besties_json from '../data/besties.json';

function besties(state = besties_json, action) {
  switch (action.type) {
    case ADD_BESTIE:
      let besties = state.filter((item) => item.id !== action.id);
      return besties;
    default:
      return state;
  }
}

export default besties;
