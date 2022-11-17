import instance from './core/instance';
import fakers from '@/utils/fakers';

export const getAccountList = async (params?: object) => {
  try {
    const res = await instance.get('/accounts', {
      params,
    });
    return res;
  } catch (err) {
    console.log('error : ', err);
  }
};

export const editAccountData = async (id: number, editData: object) => {
  try {
    const { data } = await instance.put(`/accounts/${id}`, editData);
    return data;
  } catch (err) {
    console.log('error : ', err);
  }
};

export const deleteAccount = async (id: number) => {
  try {
    await instance.delete(`/accounts/${id}`);
  } catch (err) {
    console.log('error : ', err);
  }
};

export const createAccount = async (...values: any[]) => {
  const faker = fakers();
  const accountData = {
    ...values[0],
    created_at: faker.created,
    update_at: faker.updated,
    uuid: faker.uuid,
    user_id: faker.userId,
    name: faker.name,
  };
  try {
    await instance.post(`/accounts`, accountData, {});
  } catch (err) {
    console.log('error', err);
  }
};
