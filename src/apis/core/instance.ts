import { getSessionStorage } from '@/utils/token';
import axios from 'axios';

const instance = axios.create({ baseURL: '/api' });

instance.interceptors.request.use((config) => {
  const token = getSessionStorage('token');
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
