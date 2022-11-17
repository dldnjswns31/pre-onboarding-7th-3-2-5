import { getSessionStorage, setSessionStorage } from '@/utils/token';
import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({ baseURL: '/api' });

export const deleteAccount = async (id: number) => {
  const token = getSessionStorage('token');
  try {
    await instance.delete(`/accounts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.log('error : ', err);
  }
};
