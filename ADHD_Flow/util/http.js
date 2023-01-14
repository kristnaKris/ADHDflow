import axios from 'axios';

const BACKEND_URL =
  'https://adhd-flow-finalproject-default-rtdb.europe-west1.firebasedatabase.app/';

export async function storeHabit(habitData) {
  const response = await axios.post(BACKEND_URL + '/habits.json', habitData);
  const id = response.data.name;
  return id;
}

export async function fetchHabits() {
  const response = await axios.get(BACKEND_URL + '/habits.json');

  const habits = [];

  for (const key in response.data) {
    const habitObj = {
      id: key,
      duration: response.data[key].duration,
      description: response.data[key].description
    };
    habits.push(habitObj);
  }

  return habits;
}

export function updateHabit(id, habitData) {
  return axios.put(BACKEND_URL + `/habits/${id}.json`, habitData);
}

export function deleteHabit(id) {
  return axios.delete(BACKEND_URL + `/habits/${id}.json`);
}