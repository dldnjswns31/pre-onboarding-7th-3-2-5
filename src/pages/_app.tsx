import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Style from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Style>
      <Component {...pageProps} />
    </Style>
  );
}
