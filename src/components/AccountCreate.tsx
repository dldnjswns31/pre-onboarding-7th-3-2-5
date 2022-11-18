import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Input, Modal, Form, Select, InputNumber } from 'antd';
import { brokers } from '@/utils/valueConversion';
import { Create, createAccount } from '@/apis/account';

const AccountCreate: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const { Option } = Select;

  const showModal = (): void => {
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  const onFinish = (...values: Create[]): void => {
    createAccount(...values);
    setIsModalOpen(false);
    alert('계좌가 생성되었습니다.');
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        계좌 생성
      </Button>
      <Modal title="계좌 생성하기" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Form onFinish={onFinish} form={form}>
          <Form.Item name="broker_id" label="브로커명">
            <Select id="status_selector" placeholder="브로커를 선택해주세요">
              {Object.keys(brokers).map((item, idx) => {
                return (
                  <Option key={`item_${idx}`} value={item}>
                    {brokers[item]}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item name="number" label="계좌번호">
            <Input placeholder="(-) 빼고 입력해 주세요(최대12자리)" style={{ width: 300 }} maxLength={12} required />
          </Form.Item>
          <Form.Item name="status" label="계좌상태">
            <Select id="status_selector" placeholder="계좌 상태 선택">
              <Option value={1}>입금대기</Option>
              <Option value={2}>운용중</Option>
              <Option value={3}>투자중지</Option>
              <Option value={4}>해지</Option>
            </Select>
          </Form.Item>
          <Form.Item name="assets" label="평가금액">
            <Input style={{ width: 300 }} required />
          </Form.Item>
          <Form.Item name="payments" label="입금금액">
            <Input style={{ width: 300 }} required />
          </Form.Item>
          <Form.Item name="is_active" label="계정활성화">
            <Select id="active_selector" placeholder="계정 활성화 선택">
              <Option value={true}>활성화</Option>
              <Option value={false}>비활성화</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button style={{ right: 0 }} type="primary" htmlType="submit" className="login-form-button">
              생성 하기
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AccountCreate;
