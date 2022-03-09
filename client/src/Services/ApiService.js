const BASE_URL = 'http://localhost:3001';

const apiService = {}

apiService.getRestaurants = async () => {
  return fetch(`${BASE_URL}/restaurants`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

apiService.getOneRestaurant = async (name, id) => {
  return fetch(`${BASE_URL}/restaurants/${name}/${id}`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

apiService.createOrder = async (order) => {
  return fetch(`${BASE_URL}/order`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export default apiService;