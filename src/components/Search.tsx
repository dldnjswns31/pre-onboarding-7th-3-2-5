import { getSearchData } from '@/apis/login';
import { accountState } from '@/recoil/accountState';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

export default function Search() {
  const setAccountList = useSetRecoilState(accountState);
  const [searchKeyword, setKeyword] = useState<string>('');
  const [isShow, setIsShow] = useState<boolean>(false);

  const onChangeHandle = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    getSearchData(searchKeyword).then((res) => setAccountList(res));
    setIsShow(true);
    setKeyword('');
  };

  const onClickHandle = (e) => {
    e.preventDefault();
    setKeyword('');
    getSearchData(searchKeyword).then((res) => setAccountList(res));
    setIsShow(false);
  };

  return (
    <form onSubmit={onSubmitHandle}>
      <input type="text" value={searchKeyword} onChange={onChangeHandle} placeholder="계좌명을 검색해보세요." />
      <input type="submit" value="검색" />
      {isShow && <input type="button" value="전체 계좌보기" onClick={onClickHandle} />}
    </form>
  );
}
