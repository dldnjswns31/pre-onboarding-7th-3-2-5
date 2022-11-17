import { getSessionStorage, setSessionStorage } from '@/utils/token';
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

// TODO 추후 분리 예정
export const getAccountList = async () => {
  const token = getSessionStorage('token');

  try {
    const { data } = await instance.get('/accounts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page: 7,
      },
    });
    return data;
  } catch (err) {
    console.log('error : ', err);
  }
};

export const getAccountFilter = async (params: object) => {
  const token = getSessionStorage('token');
  try {
    const { data } = await instance.get('/accounts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: params,
    });
    return data;
  } catch (err) {
    console.log('error : ', err);
  }
};

// TODO 추후 분리 예정
export const getUserList = async () => {
  const token = getSessionStorage('token');

  try {
    const { data } = await instance.get('/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('data', data);
  } catch (err) {
    console.log('error : ', err);
  }
};
