import axios from 'axios';

const api = axios.create({
  baseURL: 'http://68.183.195.26/',
});

export default api;
