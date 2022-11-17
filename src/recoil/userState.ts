import { atom } from 'recoil';

interface userList {
  id: number;
  uuid: string;
  name: string;
  photo: string;
  email: string;
  age: number;
  gender_origin: number;
  birth_date: string;
  phone_number: string;
  address: string;
  detail_address: string;
  last_login: string;
  created_at: string;
  updated_at: string;
}

type userListType = userList[];

export const userState = atom<userListType>({
  key: 'userState',
  default: [],
});
