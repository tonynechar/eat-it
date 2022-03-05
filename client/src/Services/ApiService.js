const BASE_URL = 'http://localhost:3001';

const apiService = {}

apiService.getRestaurants = (category) => {
  return fetch(`${BASE_URL}/${category}`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export default apiService;