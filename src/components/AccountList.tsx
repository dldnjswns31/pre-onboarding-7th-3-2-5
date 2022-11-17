import { useRecoilState, useRecoilValue } from 'recoil';
import { accountState, currentPageState, totalAccountState } from '@/recoil/accountState';

import getBrokerName from '@/utils/brokerName';
import getAccountStatus from '@/utils/accountStatus';
import accountMasking from '@/utils/accountMasking';
import accountActive from '@/utils/accountActive';
import dateFormat from '@/utils/dateFormat';
import comma from '@/utils/comma';

import { Space, Table, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  user_id: number;
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
    render: (text) => <a>{text}</a>,
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
  const [accountList, setAccountList] = useRecoilState(accountState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const totalAccountItem = useRecoilValue(totalAccountState);

  const data = accountList?.map((account) => {
    return {
      user_id: account.user_id,
      broker_id: getBrokerName(account.broker_id),
      number: accountMasking(account.number),
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
      <Table columns={columns} dataSource={data} pagination={false} />
      <div className="pagination__container">
        <Pagination
          defaultCurrent={currentPage}
          total={totalAccountItem}
          showSizeChanger={false}
          onChange={(page) => {
            setCurrentPage(page);
          }}
        />
      </div>
      <style jsx>{`
        .pagination__container {
          display: inline-flex;
          justify-content: center;
          width: 100%;
          margin-top: 2rem;
        }
      `}</style>
    </>
  );
}
