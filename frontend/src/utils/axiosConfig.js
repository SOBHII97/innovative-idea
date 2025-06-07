// src/utils/axiosConfig.js
import axios from 'axios';
import { toast } from 'react-toastify';

// Create axios instance with default config
const instance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token to requests (except public routes like contact)
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && !config.url.includes('/contact')) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle global response errors
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'An error occurred';
    toast.error(message);

    // Auto-logout on 401
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export default instance;
