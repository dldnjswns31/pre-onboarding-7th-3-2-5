import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import 'antd/dist/antd.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
