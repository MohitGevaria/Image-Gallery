import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { CameraOutlined, StarFilled, CiCircleFilled, HomeOutlined, UploadOutlined, PictureTwoTone } from '@ant-design/icons';
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
  {
    label: (
      <a href="/pictures" rel="noopener noreferrer">
        Home
      </a>
    ),
    key: 'Home',
    icon: <HomeOutlined />,
  },
  {
    label: (
      <a href="/recents" rel="noopener noreferrer">
        Recents
      </a>
    ),
    key: 'Recents',
    icon: <PictureTwoTone />,
  },
  {
    label: (
      <a href="/upload" rel="noopener noreferrer">
        Upload
      </a>
    ),
    key: 'upload',
    icon: <UploadOutlined />,
  },
];

const NavBar = () => {
  const [current, setCurrent] = useState('Home');

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return <Menu onSelect={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme={'dark'} />;
};

export default NavBar;