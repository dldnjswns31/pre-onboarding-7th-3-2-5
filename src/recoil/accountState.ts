import { atom } from 'recoil';

interface accountList {
  id: number;
  user_id: number;
  uuid: string;
  broker_id: string;
  status: number;
  number: string;
  name: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

type accountListType = accountList[];

export const accountState = atom<accountListType>({
  key: 'accountState',
  default: [],
});
