import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { getSessionStorage } from '@/utils/token';

import { useRecoilState } from 'recoil';
import { userToken } from '@/recoil/loginState';

export default function Main() {
  const [hasToken, setToken] = useRecoilState<string | null>(userToken);
  const router = useRouter();

  useEffect(() => {
    const token = getSessionStorage('token');
    setToken(token);
  }, []);

  useEffect(() => {
    const token = getSessionStorage('token');
    if (!token) {
      router.push('/login');
      return;
    }
    if (token) {
      router.push('/dashboard');
      return;
    }
  }, []);

  return null;
}
