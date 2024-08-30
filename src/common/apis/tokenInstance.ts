import axios from 'axios';
import { isBefore } from 'date-fns/isBefore';

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
    const soptApplyAccessTokenExpiredTime = new Date(localStorage.getItem('soptApplyAccessTokenExpiredTime') || '');
    const isValidDate = soptApplyAccessTokenExpiredTime.toDateString() !== 'Invalid Date';
    const afterRecruiting = isBefore(soptApplyAccessTokenExpiredTime, new Date());

    if (!isValidDate || !soptApplyAccessTokenExpiredTime || afterRecruiting) {
      localStorage.removeItem('soptApplyAccessToken');
      localStorage.removeItem('soptApplyAccessTokenExpiredTime');

      window.location.href = '/';

      return config;
    }

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
