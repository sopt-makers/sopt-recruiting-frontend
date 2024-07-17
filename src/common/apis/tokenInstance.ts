import axios from 'axios';

const tokenInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default tokenInstance;

tokenInstance.interceptors.request.use(
  (config) => {
    const soptApplyAccessToken = localStorage.getItem('soptApplyAccessToken');

    if (!soptApplyAccessToken) {
      window.location.href = '/';

      return config;
    }

    config.headers.Authorization = `Bearer ${soptApplyAccessToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
