import { useEffect } from 'react';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { accountState, selectedFilter } from '@/recoil/accountState';
import { userState } from '@/recoil/userState';

import { getAccountFilter, getAccountList, getUserList } from '@/apis/login';
import getBrokerName from '@/utils/brokerName';
import getAccountStatus from '@/utils/accountStatus';
import accountMasking from '@/utils/accountMasking';
import accountActive from '@/utils/accountActive';
import dateFormat from '@/utils/dateFormat';
import comma from '@/utils/comma';

import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  user_id: string;
  broker_id: string | undefined;
  number: string;
  status: string | undefined;
  name: string;
  assets: string;
  payments: string;
  is_active: string;
  created_at: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: '고객명',
    dataIndex: 'user_id',
    key: 'user_id',
  },
  {
    title: '브로커명',
    dataIndex: 'broker_id',
    key: 'broker_id',
  },
  {
    title: '계좌번호',
    dataIndex: 'number',
    key: 'number',
    render: (account) => <Link href={`/account/${account}`}>{accountMasking(account)}</Link>,
  },
  {
    title: '계좌상태',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '계좌명',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '평가금액',
    dataIndex: 'assets',
    key: 'assets',
  },
  {
    title: '입금금액',
    dataIndex: 'payments',
    key: 'payments',
  },
  {
    title: '계좌 활성화',
    dataIndex: 'is_active',
    key: 'is_active',
  },
  {
    title: '계좌 개설일',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

export default function AccountList() {
  const [users, setUserList] = useRecoilState(userState);
  const [accountList, setAccountList] = useRecoilState(accountState);
  const params = useRecoilValue(selectedFilter);

  const userNameMatch = (userId: number) => {
    const userData = users.filter((user) => user.id === userId)[0];
    return userData?.name;
  };

  useEffect(() => {
    getAccountList().then((res) => setAccountList(res));
    getUserList().then((res) => setUserList(res));
  }, []);

  useEffect(() => {
    getAccountFilter(params).then((res) => setAccountList(res));
  }, [params]);

  const data = accountList?.map((account) => {
    return {
      user_id: userNameMatch(account.user_id),
      broker_id: getBrokerName(account.broker_id),
      number: account.number,
      status: getAccountStatus(account.status),
      name: account.name,
      assets: comma(account.assets),
      payments: comma(account.payments),
      is_active: accountActive(account.is_active),
      created_at: dateFormat(account.created_at),
    };
  });

  return <Table columns={columns} dataSource={data} />;
}
