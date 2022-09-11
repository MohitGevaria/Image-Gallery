import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Space, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from "react-router-dom";

const ForgotPassword = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const { resetPassword } = useAuth();
    const [loading, setLoading] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setLoading(true)
            await resetPassword(username)
            message.info("Check your inbox for further instructions")
            navigate("/login");
        } catch {
            message.error("Failed to reset password")
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
                title="Reset Password"
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
                <Form.Item>
                    <div className="login-form-forgot">
                        <Link to="/login">Login</Link>
                    </div>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" disabled={loading}>
                        Reset Password
                    </Button>
                </Form.Item>

            </Form>

        </Space>
    );
}

export default ForgotPassword;