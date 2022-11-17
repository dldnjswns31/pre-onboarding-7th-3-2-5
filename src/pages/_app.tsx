import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { useEffect, useState } from 'react';

import { getSessionStorage } from '@/utils/token';

import '../styles/globals.css';
import Style from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const [hasToken, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = getSessionStorage('token');
    setToken(token);
  }, []);

  return (
    <RecoilRoot>
      {hasToken ? (
        <Style setToken={setToken}>
          <Component {...pageProps} />
        </Style>
      ) : (
        <Component {...pageProps} setToken={setToken} />
      )}
    </RecoilRoot>
  );
}
