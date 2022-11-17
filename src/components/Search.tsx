import { getSearchData } from '@/apis/login';
import { accountState } from '@/recoil/accountState';
import { searchKeywordState } from '@/recoil/searchState';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import styles from '../styles/Search.module.css';

export default function Search() {
  const setAccountList = useSetRecoilState(accountState);
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);

  const [inputValue, setInputValue] = useState<string>('');
  const [isShow, setIsShow] = useState<boolean>(false);

  const onChangeHandle = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    // getSearchData(inputValue).then((res) => setAccountList(res));
    setSearchKeyword(inputValue);
    setIsShow(true);
    setInputValue('');
  };

  const onClickHandle = (e) => {
    e.preventDefault();
    // getSearchData(inputValue).then((res) => setAccountList(res));
    setSearchKeyword(inputValue);
    setIsShow(false);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmitHandle} className="search">
      <input
        type="text"
        className={styles.searchbar}
        value={inputValue}
        onChange={onChangeHandle}
        placeholder="계좌명을 검색해보세요."
      />
      <input type="submit" className={styles.searchBtn} value="검색" />
      {isShow && <input type="button" className={styles.totalBtn} value="전체 계좌보기" onClick={onClickHandle} />}
    </form>
  );
}
