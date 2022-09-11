import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card } from 'antd';
import { BorderOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Cards = () => (
    <div>
    <Card 
        size='small'
        loading={false}
        className='index-section'
        hoverable
        style={{
            width: 240,
            margin: "22px",
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }}
        cover={<img alt="image" style={{"width":"350px", "height":"300px"}} src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg" />}
    >
        <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
    <Card
        size='small'
        loading={false}
        
        className='index-section'
        hoverable
        style={{
            width: 240,
            margin: "22px",
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }}
        cover={<img alt="image" style={{"width":"350px", "height":"300px"}} src="https://wallpaperaccess.com/full/87541.jpg" />}
    >
        <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
    <Card
        size='small'
        loading={false}
        
        className='index-section'
        hoverable
        style={{
            width: 240,
            margin: "22px",
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }}
        cover={<img alt="image" style={{"width":"350px", "height":"300px"}} src="https://wallpaperaccess.com/full/87541.jpg" />}
    >
        <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
    <Card
        size='small'
        loading={false}
        
        className='index-section'
        hoverable
        style={{
            width: 240,
            margin: "22px",
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }}
        cover={<img alt="image" style={{"width":"350px", "height":"300px"}} src="https://wallpaperaccess.com/full/87541.jpg" />}
    >
        <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
    
    </div>
    
);

export default Cards;