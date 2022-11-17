import instance from './core/instance';

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
  try {
    await instance.post(`/accounts`, values[0]);
  } catch (err) {
    console.log('error', err);
  }
};
