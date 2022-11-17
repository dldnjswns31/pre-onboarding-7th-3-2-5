import { getSearchData } from '@/apis/login';
import { useState } from 'react';

export default function Search() {
  const [searchKeyword, setKeyword] = useState<string>('');

  const onChangeHandle = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    getSearchData(searchKeyword).then((res) => console.log(res));
    setKeyword('');
  };

  return (
    <form onSubmit={onSubmitHandle}>
      <input type="text" value={searchKeyword} onChange={onChangeHandle} />
      <input type="submit" value="검색" />
    </form>
  );
}
