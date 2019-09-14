import axios from 'axios';

const api = axios.create({
  baseURL: 'https://razrstark.tech/',
  // baseURL: 'http://localhost:3333/',
});

export default api;
