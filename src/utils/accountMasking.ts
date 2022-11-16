export default function accountMasking(account: string) {
  const front = account.slice(0, 2);
  const back = account.slice(10);
  const length = account.length - 4;

  return front + '*'.repeat(length) + back;
}
