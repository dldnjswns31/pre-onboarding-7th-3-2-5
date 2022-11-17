import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { useEffect, useState } from 'react';

import { getSessionStorage } from '@/utils/token';
import '../styles/globals.css';

import Login from './login';
import Style from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const [hasToken, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = getSessionStorage('token');
    setToken(token);
  }, []);

  return hasToken ? (
    <RecoilRoot>
      <Style>
        <Component {...pageProps} />
      </Style>
    </RecoilRoot>
  ) : (
    <Login />
  );
}
