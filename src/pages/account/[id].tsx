import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useRecoilState } from 'recoil';
import { accountState } from '@/recoil/accountState';
import { userState } from '@/recoil/userState';

import { getAccountList, getUserList, getAccountDetail } from '@/apis/login';
import getBrokerName from '@/utils/brokerName';
import getAccountStatus from '@/utils/accountStatus';
import accountActive from '@/utils/accountActive';
import dateFormat from '@/utils/dateFormat';
import comma from '@/utils/comma';

import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  user_id: number;
  broker_id: string;
  number: string;
  status: number;
  name: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: string;
}

export default function AccountId() {
  const [users, setUserList] = useRecoilState(userState);
  const [accountDetail, setAccountDetail] = useState([]);
  const router = useRouter();
  const id = router.query.id as string;
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
  ];

  const userNameMatch = (userId: number) => {
    const userData = users.filter((user) => user.id === userId)[0];
    return userData?.name;
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    getAccountList({ number_like: id }).then((res) => setAccountDetail(res));
  }, [id]);

  const data = accountDetail?.map((account: DataType) => {
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

  return (
    <>
      <h2>계좌 정보</h2>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
