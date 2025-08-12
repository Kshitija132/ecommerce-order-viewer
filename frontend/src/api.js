import axios from 'axios';

const api = axios.create({
  baseURL: '/api',              // thanks to the proxy
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});

export default api;
