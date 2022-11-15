import { setSessionStorage } from '@/utils/token';
import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({ baseURL: '/api' });

export const login = async (email: string, password: string) => {
  try {
    const { data } = await instance.post('/login', { email, password });
    setSessionStorage('token', data.accessToken);
    return data.user;
  } catch (err) {
    console.log('error : ', err);
  }
};
