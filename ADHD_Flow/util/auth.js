import axios from 'axios';

const API_KEY = 'AIzaSyCqY-resJ528eXh6_F6I27Q4vEGUMGykR0';

async function authenticate(mode, email, password) { // mode = signUp or signInWithPassword
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}