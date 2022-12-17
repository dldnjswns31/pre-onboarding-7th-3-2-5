import { setSessionStorage } from '@/utils/token';
import instance from './core/instance';

export const login = async (email: string, password: string) => {
  try {
    const { data } = await instance.post('/login', { email, password });
    setSessionStorage('token', data.accessToken);
    setSessionStorage('userEmail', data.user.email);
    return data;
  } catch (err) {
    console.log('error : ', err);
  }
};

export const getUserList = async () => {
  try {
    const { data } = await instance.get('/users');
    return data;
  } catch (err) {
    console.log('error : ', err);
  }
};
