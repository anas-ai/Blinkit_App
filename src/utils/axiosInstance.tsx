import axios from 'axios';
import {BASE_URL} from '../config/ApiConfig';
import {getStringFromStorage} from './MmkvStorageHelper';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  async config => {
    try {
      const token = getStringFromStorage('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
