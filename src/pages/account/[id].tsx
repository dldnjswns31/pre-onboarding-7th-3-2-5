import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/userState';

import { getAccountList, getUserList, getAccountDetail } from '@/apis/login';
import { accountActive, getAccountStatus, getBrokerName } from '@/utils/valueConversion';
import { dateFormat, comma, accountMasking } from '@/utils/formatting';

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
      render: (user) => userNameMatch(user),
    },
    {
      title: '브로커명',
      dataIndex: 'broker_id',
      key: 'broker_id',
      render: (broker) => getBrokerName(broker),
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
      render: (status) => getAccountStatus(status),
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
      render: (assets) => comma(assets),
    },
    {
      title: '입금금액',
      dataIndex: 'payments',
      key: 'payments',
      render: (payments) => comma(payments),
    },
    {
      title: '계좌 활성화',
      dataIndex: 'is_active',
      key: 'is_active',
      render: (active) => accountActive(active),
    },
    {
      title: '계좌 개설일',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (date) => dateFormat(date),
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
    getAccountList({ number_like: id }).then((res) => setAccountDetail(res?.data));
  }, [id]);

  return (
    <>
      <h2>계좌 정보</h2>
      <Table columns={columns} dataSource={accountDetail} pagination={false} />
    </>
  );
}
