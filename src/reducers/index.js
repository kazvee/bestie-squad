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

function createBestie(id) {
  let bestie = besties_json.find((b) => b.id === id);
  return bestie;
}

function squad(state = [], action) {
  switch (action.type) {
    case ADD_BESTIE:
      let squad = [...state, createBestie(action.id)];
      return squad;
    default:
      return state;
  }
}

export default besties;
