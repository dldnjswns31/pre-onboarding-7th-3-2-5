import { useSetRecoilState } from 'recoil';
import { selectedBroker } from '@/recoil/accountState';

import { brokers } from '@/utils/brokerName';
import { statusList } from '@/utils/accountStatus';

export default function Filter() {
  const setSelectedBroker = useSetRecoilState(selectedBroker);

  return (
    <div className="filtler">
      <select name="broker" id="broker" onChange={(e) => setSelectedBroker(e.target.value)}>
        <option value="default">전체 브로커</option>
        {Object.keys(brokers).map((broker) => (
          <option value={broker}>{brokers[broker]}</option>
        ))}
      </select>
      <select name="active" id="active">
        <option value="default">계좌 활성화</option>
        <option value="true">활성화</option>
        <option value="false">비활성화</option>
      </select>
      <select name="status" id="status">
        <option value="default">계좌 상태</option>
        {Object.keys(statusList).map((status) => (
          <option value={status}>{status}</option>
        ))}
      </select>
    </div>
  );
}
