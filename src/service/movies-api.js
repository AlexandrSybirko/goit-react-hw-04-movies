const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '2c8047fe24212bec24c8e99b54a108ca';



function fetchTrendingMoves() {

  return fetch(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('No response from server'));
  });
}

const api = {
  fetchTrendingMoves,
}

export default api;