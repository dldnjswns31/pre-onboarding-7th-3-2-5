import { searchKeywordState } from '@/recoil/searchState';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import styles from '../styles/Search.module.css';

export default function Search() {
  const setSearchKeyword = useSetRecoilState(searchKeywordState);

  const [inputValue, setInputValue] = useState<string>('');
  const [isShow, setIsShow] = useState<boolean>(false);

  const onChangeHandle = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue((e.target as HTMLInputElement).value);
  };

  const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) {
      alert('검색어를 입력해주세요!');
      return;
    }
    setSearchKeyword(inputValue);
    setIsShow(true);
  };

  const onClickHandle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsShow(false);
    setInputValue('');
    setSearchKeyword('');
  };

  return (
    <form onSubmit={onSubmitHandle} className="search">
      {isShow && <input type="button" className={styles.totalBtn} value="검색 해제" onClick={onClickHandle} />}
      <input
        type="text"
        className={styles.searchbar}
        value={inputValue}
        onChange={onChangeHandle}
        placeholder="계좌명을 검색해보세요."
      />
      <input type="submit" className={styles.searchBtn} value="검색" />
    </form>
  );
}
