import AccountList from '@/components/AccountList';
import Filter from '@/components/Filter';
import Search from '@/components/Search';
import AccountCreate from '@/components/AccountCreate';
import Style from '@/components/Layout';

const Dashboard = () => {
  return (
    <>
      <Style>
        <div className="menuContainer">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Filter />
            <AccountCreate />
          </div>
          <Search />
        </div>
        <AccountList />
      </Style>
    </>
  );
};

export default Dashboard;
