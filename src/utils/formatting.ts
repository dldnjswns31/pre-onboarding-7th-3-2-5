export function dateFormat(date: string) {
  return date?.slice(0, 10);
}

export function comma(price: string) {
  return parseInt(price)?.toLocaleString();
}

export function accountMasking(account: string) {
  const front = account?.slice(0, 2);
  const back = account?.slice(10);
  const length = account?.length - 4;

  return front + '*'.repeat(length) + back;
}
