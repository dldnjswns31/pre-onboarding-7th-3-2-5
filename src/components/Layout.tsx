import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { accountState, currentPageState, selectedFilter, totalAccountState } from '@/recoil/accountState';
import { searchKeywordState } from '@/recoil/searchState';
import { userState } from '@/recoil/userState';

import { getSessionStorage, removeSessionStorage } from '@/utils/token';
import { getAccountList } from '@/apis/account';
import { getUserList } from '@/apis/login';

import { ItemType } from 'antd/lib/menu/hooks/useItems';
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
import logo from '../../public/logo.png';
import { userToken } from '@/recoil/loginState';

const { Header, Sider, Content, Footer } = Layout;

enum menuName {
  Account = '투자계좌',
  Logout = '로그아웃',
}

// {
//   children,
//   setToken,
//   hasToken,
// }: {
//   children: ReactNode;
//   setToken: Dispatch<SetStateAction<string | null>>;
//   hasToken: string | null;
// }

export default function Style({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [token, setToken] = useRecoilState(userToken);

  const setUserList = useSetRecoilState(userState);
  const setTotalAccountItem = useSetRecoilState<number>(totalAccountState);
  const setAccountList = useSetRecoilState(accountState);

  const searchKeyword = useRecoilValue(searchKeywordState);
  const filterParams = useRecoilValue(selectedFilter);

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [currentMenu, setCurrentMenu] = useState<string>(menuName.Account);

  const router = useRouter();

  // 첫 페이지네이션 크기 설정 및 mapping용 사용자명 fetching
  useEffect(() => {
    getAccountList().then((res) => {
      setTotalAccountItem(res?.data.length);
    });
    getUserList().then((res) => setUserList(res));
  }, []);

  // filter나 search가 바뀔때마다 pagination 크기 다시 계산
  useEffect(() => {
    getAccountList({ ...filterParams, name_like: searchKeyword }).then((res) => {
      setTotalAccountItem(res?.data.length);
    });
    setCurrentPage(1);
  }, [filterParams, searchKeyword]);

  // filter, pagination, search가 바뀔때마다 새로운 accountList fetching
  useEffect(() => {
    getAccountList({ ...filterParams, _page: currentPage, name_like: searchKeyword }).then((res) => {
      setAccountList(res?.data);
    });
  }, [filterParams, currentPage, searchKeyword]);

  useEffect(() => {
    if (token === null) {
      router.push('/login');
    }
  }, [token]);

  const userId = getSessionStorage('userEmail');
  const menuItems: ItemType[] = [
    {
      key: menuName.Account,
      icon: <BankOutlined />,
      label: <Link href="/">{menuName.Account}</Link>,
    },
    {
      key: menuName.Logout,
      icon: <LogoutOutlined />,
      label: (
        <div
          onClick={() => {
            removeSessionStorage();
            setToken(null);
            router.push('/login');
          }}
        >
          {menuName.Logout}
        </div>
      ),
    },
  ];
  return (
    <div className="container">
      <Layout style={{ width: '100%', height: '100%' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <Image src={logo} alt="logo" />
            PREFACE
          </div>
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
              minHeight: 580,
              height: '100%',
            }}
          >
            {children}
          </Content>

          <Footer style={{ textAlign: 'center', color: '#656565' }}>© December and Company Inc.</Footer>
        </Layout>
      </Layout>
      <style jsx>{`
        .container {
          width: 100vw;
          min-width: 1280px;
          height: 100vh;
          min-height: 1024px;
        }
      `}</style>
    </div>
  );
}
