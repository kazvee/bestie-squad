import besties_json from '../data/besties.json';

export function createBestie(id) {
  let bestie = besties_json.find((b) => b.id === id);
  return bestie;
}
