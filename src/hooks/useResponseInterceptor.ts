import { Dispatch, SetStateAction } from 'react';
import instance from '@/apis/core/instance';

const useResponseInterceptor = (setState: Dispatch<SetStateAction<string | null>>) => {
  instance.interceptors.response.use(
    (config) => config,
    (error) => {
      if (error.response.status === 401) {
        setState(null);
      }
    },
  );
};

export default useResponseInterceptor;
