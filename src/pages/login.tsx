import { useRouter } from 'next/router';

import { getSessionStorage } from '@/utils/token';
import { login } from '@/apis/login';

import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

export default function Login({ setToken }) {
  const router = useRouter();
  const onFinish = (values: { email: string; password: string }) => {
    const { email, password } = values;

    login(email, password).then((res) => {
      const token = getSessionStorage('token');
      setToken(token);
      router.push('/');
    });
  };

  return (
    <Form name="normal_login" className="login-form" onFinish={onFinish}>
      <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}
