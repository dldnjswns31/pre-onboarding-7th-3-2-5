import Link from 'next/link';
import 'antd/dist/antd.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  BankOutlined,
  UserOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Avatar, Badge } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { accountState, currentPageState, selectedFilter, totalAccountState } from '@/recoil/accountState';
import { getAccountList } from '@/apis/login';
import { getSessionStorage } from '@/utils/token';

const { Header, Sider, Content, Footer } = Layout;

enum menuName {
  Account = '투자계좌',
  Logout = '로그아웃',
}

const menuItems: ItemType[] = [
  {
    key: menuName.Account,
    icon: <BankOutlined />,
    label: <Link href="/">{menuName.Account}</Link>,
  },
  {
    key: menuName.Logout,
    icon: <LogoutOutlined />,
    label: <Link href="/">{menuName.Logout}</Link>,
  },
];

export default function Style({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [currentMenu, setCurrentMenu] = useState<string>(menuName.Account);
  const [_, setTotalAccountItem] = useRecoilState<number>(totalAccountState);
  const [accountList, setAccountList] = useRecoilState(accountState);
  const filterParams = useRecoilValue(selectedFilter);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  console.log('리렌더');

  useEffect(() => {
    getAccountList().then((res) => {
      setTotalAccountItem(res?.data.length);
    });
    if (filterParams.length === 0) {
      getAccountList({ _page: currentPage }).then((res) => {
        console.log(res);
        setAccountList(res.data);
      });
    }
  }, []);

  useEffect(() => {
    getAccountList({ ...filterParams }).then((res) => {
      setTotalAccountItem(res?.data.length);
    });
    setCurrentPage(1);
  }, [filterParams]);

  useEffect(() => {
    if (filterParams.length !== 0) {
      getAccountList({ ...filterParams, _page: currentPage }).then((res) => {
        setAccountList(res.data);
      });
    }
  }, [filterParams, currentPage]);

  const userId = getSessionStorage('userEmail');
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[currentMenu]}
          onClick={(e) => setCurrentMenu(e.key)}
          items={menuItems}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background header" style={{ padding: 0 }}>
          <div className="trigger" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            <span>{currentMenu}</span>
          </div>
          <div className="header-menu">
            <Badge status="warning" text="개발" />
            <Badge count={100}>
              <Avatar
                style={{ backgroundColor: 'transparent', color: 'black' }}
                icon={<BellOutlined />}
                size="default"
              />
            </Badge>
            <Avatar shape="square" icon={<UserOutlined />} />
            <span>{userId}님 환영합니다.</span>
          </div>
        </Header>

        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Capyright © Decembern and Company Inc.</Footer>
      </Layout>
    </Layout>
  );
}
