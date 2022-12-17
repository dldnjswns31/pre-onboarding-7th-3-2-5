import { SetterOrUpdater } from 'recoil';
import { removeSessionStorage } from '@/utils/token';
import { Dispatch, SetStateAction } from 'react';
import instance from '@/apis/core/instance';

const useResponseInterceptor = (setState: SetterOrUpdater<string | null>) => {
  instance.interceptors.response.use(
    (config) => config,
    (error) => {
      if (error.response.status === 401) {
        removeSessionStorage();
        setState(null);
      }
    },
  );
};

export default useResponseInterceptor;
