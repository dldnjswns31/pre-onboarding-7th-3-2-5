import { atom, selector } from 'recoil';

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

export const selectedBroker = atom({
  key: 'selectedBroker',
  default: 'defualt',
});

export const brokerFilter = selector({
  key: 'brokerFilter',
  get: ({ get }) => {
    const accountList = get(accountState);
    const selected = get(selectedBroker);

    console.log('selected : ', selected);

    switch (selected) {
      case selected:
        const copyAccountList = accountList && [...accountList];
        return copyAccountList.filter((account) => account.broker_id === selected);
      default:
        return accountList;
    }
  },
});
