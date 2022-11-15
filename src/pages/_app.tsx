import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Style from '@/components/Layout';
import { getSessionStorage } from '@/utils/token';
import Login from './login';

export default function App({ Component, pageProps }: AppProps) {
  const token = typeof window !== 'undefined' ? getSessionStorage('token') : null;

  return token ? (
    <Style>
      <Component {...pageProps} />
    </Style>
  ) : (
    <Login />
  );
}
