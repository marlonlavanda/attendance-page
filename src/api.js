const url = "https://rickandmortyapi.com/api/";

function getCharacters() {
  return fetch(`${url}/character?limit=20`)
  .then(res => res.json())
  .then(res => res.results)
}

export default {
  getCharacters,
};