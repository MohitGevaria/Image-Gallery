import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { CameraOutlined, StarFilled, CiCircleFilled } from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
  {
    label: 'Personal',
    key: 'Personal',
    icon: <CameraOutlined />,
  },
  {
    label: 'Astronomical Imaging',
    key: 'Astronomy',
    icon: <StarFilled />,
  },
  {
    label: 'Wildlife',
    key: 'Wildlife',
    icon: <CiCircleFilled />,
    children: [
        {
            label: 'Dogs',
            key: 'Cats',
        },
        {
            label: 'Cats',
            key: 'Dogs',
        },
    ],
  },
  {
    label: (
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        About & Contact
      </a>
    ),
    key: 'alipay',
  },
];

const NavBar = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme={'dark'} />;
};

export default NavBar;