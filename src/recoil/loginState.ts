import { atom } from 'recoil';

export const userToken = atom<null | string>({ key: 'userToken', default: null });
