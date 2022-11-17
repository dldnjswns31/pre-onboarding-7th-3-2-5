import { useRecoilState } from 'recoil';
import { selectedFilter } from '@/recoil/accountState';

import { brokers } from '@/utils/brokerName';
import { statusList } from '@/utils/accountStatus';

import styles from '../styles/Filter.module.css';

export default function Filter() {
  const [selected, setSelected] = useRecoilState(selectedFilter);

  const onChangeHandle = (e) => {
    const { name, value } = e.target;

    if (value) {
      setSelected({
        ...selected,
        [name]: value,
      });
    }

    if (!value) {
      setSelected({
        ...selected,
        [name]: null,
      });
    }
  };

  return (
    <div className="filter">
      <select name="broker_id" className={styles.select} id="broker" onChange={onChangeHandle}>
        <option value="">전체 브로커</option>
        {Object.keys(brokers).map((broker, idx) => (
          <option key={idx} value={broker}>
            {brokers[broker]}
          </option>
        ))}
      </select>
      <select name="is_active" className={styles.select} id="active" onChange={onChangeHandle}>
        <option value="">계좌 활성화</option>
        <option value="true">활성화</option>
        <option value="false">비활성화</option>
      </select>
      <select name="status" className={styles.select} id="status" onChange={onChangeHandle}>
        <option value="">계좌 상태</option>
        {Object.keys(statusList).map((status, idx) => (
          <option key={idx} value={statusList[status]}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}
