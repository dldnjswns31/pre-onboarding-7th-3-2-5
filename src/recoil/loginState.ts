import { getSessionStorage } from '@/utils/token';
import { atom } from 'recoil';

export const userToken = atom<null | string>({ key: 'userToken', default: getSessionStorage('token') });
