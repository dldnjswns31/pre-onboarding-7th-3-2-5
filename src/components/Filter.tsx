import { brokers } from '@/utils/brokerName';

export default function Filter() {
  return (
    <div className="filtler">
      <select name="broker" id="broker">
        <option value="default">브로커 찾기</option>
        {Object.values(brokers).map((broker) => (
          <option value={broker}>{broker}</option>
        ))}
      </select>
    </div>
  );
}
