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

    config.headers.Authorization = soptApplyAccessToken;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

tokenInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      window.location.href = '/';
    }

    return Promise.reject(error);
  },
);
