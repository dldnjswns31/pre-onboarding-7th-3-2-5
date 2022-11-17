import AccountList from '@/components/AccountList';
import Filter from '@/components/Filter';
import Search from '@/components/Search';

export default function Main() {
  return (
    <>
      <Filter />
      <Search />
      <AccountList />
    </>
  );
}
