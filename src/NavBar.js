import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { CameraOutlined, StarFilled, CiCircleFilled, HomeOutlined, StarTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';
import Home from './Home';

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
  {
    label: (
      <a href="https://eloquent-pie-3e7822.netlify.app//pictures" rel="noopener noreferrer">
        Home
      </a>
    ),
    key: 'Home',
    icon: <HomeOutlined />,
  },
  {
    label: (
      <a href="https://eloquent-pie-3e7822.netlify.app//befaft" rel="noopener noreferrer">
        Before After
      </a>
    ),
    key: 'BeforeAfter',
    icon: <StarTwoTone />,
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