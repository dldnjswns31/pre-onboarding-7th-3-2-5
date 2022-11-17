interface ArrayType {
  [key: string]: number;
}

export const statusList: ArrayType = { 관리자확인필요: 9999, 입금대기: 1, 운용중: 2, 투자중지: 3, 해지: 4 };

export default function getAccountStatus(status: number) {
  return Object.keys(statusList).find((key) => statusList[key] === status);
}
