export function accountActive(isActive: boolean) {
  return isActive ? '활성화' : '비활성화';
}

interface ArrayType {
  [key: string]: number;
}

export const statusList: ArrayType = { 관리자확인필요: 9999, 입금대기: 1, 운용중: 2, 투자중지: 3, 해지: 4 };

export function getAccountStatus(status: number) {
  return Object.keys(statusList).find((key) => statusList[key] === status);
}

interface brokerType {
  [key: string]: string;
}

export const brokers: brokerType = {
  '209': '유안타증권',
  '218': '현대증권',
  '230': '미래에셋증권',
  '238': '대우증권',
  '240': '삼성증권',
  '243': '한국투자증권',
  '247': '우리투자증권',
  '261': '교보증권',
  '262': '하이투자증권',
  '263': 'HMC투자증권',
  '264': '키움증권',
  '265': '이베스트투자증권',
  '266': 'SK증권',
  '267': '대신증권',
  '268': '아이엠투자증권',
  '269': '한화투자증권',
  '270': '하나대투자증권',
  '279': '동부증권',
  '280': '유진투자증권',
  '288': '카카오페이증권',
  '287': '메리츠종합금융증권',
  '290': '부국증권',
  '291': '신영증권',
  '292': 'LIG투자증권',
  '271': '토스증권',
};

export function getBrokerName(brokerId: string) {
  return Object.values(brokers).find((value) => value === brokers[brokerId]);
}
