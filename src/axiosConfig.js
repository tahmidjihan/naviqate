// axiosConfig.js
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND;

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    // console.log(token);
    if (token) {
      config.headers.token = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
