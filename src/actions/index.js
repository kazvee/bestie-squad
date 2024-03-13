export const ADD_BESTIE = 'ADD_BESTIE';

export function addBestieById(id) {
  const action = {
    type: ADD_BESTIE,
    id,
  };
  return action;
}
