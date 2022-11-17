import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { getSessionStorage } from '@/utils/token';

import AccountList from '@/components/AccountList';
import Filter from '@/components/Filter';
import Search from '@/components/Search';
import AccountCreate from '@/components/AccountCreate';

export default function Main() {
  const router = useRouter();

  useEffect(() => {
    const token = getSessionStorage('token');
    if (!token) {
      router.push('/login');
    }
  }, []);
  return (
    <>
      <div className="menuContainer">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Filter />
          <AccountCreate />
        </div>
        <Search />
      </div>
      <AccountList />
    </>
  );
}
