import axios from 'axios';
import { APIENDPOINT } from '../config';
// Create an Axios instance
const api = axios.create({
  baseURL: APIENDPOINT, // Change as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include token from localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
