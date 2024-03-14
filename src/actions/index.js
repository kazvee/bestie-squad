export const ADD_BESTIE = 'ADD_BESTIE';
export const REMOVE_BESTIE = 'REMOVE_BESTIE';

export function addBestieById(id) {
  const action = {
    type: ADD_BESTIE,
    id,
  };
  return action;
}

export function removeBestieById(id) {
  const action = {
    type: REMOVE_BESTIE,
    id,
  };
  return action;
}
