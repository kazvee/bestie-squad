import { ADD_BESTIE, REMOVE_BESTIE } from '../actions';
import { createBestie } from '../reducers/helpers';

function squad(state = [], action) {
  let squad;
  switch (action.type) {
    case ADD_BESTIE:
      squad = [...state, createBestie(action.id)];
      return squad;
    case REMOVE_BESTIE:
      squad = state.filter((item) => item.id !== action.id);
      return squad;
    default:
      return state;
  }
}

export default squad;
