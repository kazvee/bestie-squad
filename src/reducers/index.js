import besties_json from '../data/besties.json';

function besties(state = besties_json, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default besties;
