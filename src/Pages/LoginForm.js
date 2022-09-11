import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Space, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setLoading(true)
      await login(username, password)
      message.success("Logged In.");
      navigate("/upload");
    } catch {
      message.error("Failed to log in")
    }
    setLoading(false)
  }

  return (
    <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center', padding: '100px', minWidth: "300px" }}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onSubmitCapture={handleSubmit}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              type: "email",
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" value={username} onChange={(e) => { setUsername(e.target.value) }} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={username}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <div className="login-form-forgot">
            <Link to="/forgot-password">Forgot password</Link>
          </div>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" disabled={loading}>
            Log in
          </Button>
        </Form.Item>
      </Form>

    </Space>
  );
};

export default LoginForm;