import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { ImageList, ImageListItem } from '@mui/material';


const Recents = () => {
    const itemData = [
        {
            title : "img1",
            img : "https://cdn.phixer.net/assets/images/portfolio/lawn_replacement/03.jpg"
        },
        {
            title : "img2",
            img : "http://placeimg.com/1500/500/nature"
        },
        {
            title : "img3",
            img : "http://placeimg.com/1920/1080/nature"
        },
        {
            title : "img4",
            img : "http://placeimg.com/800/1200/nature"
        },
        {
            title : "img5",
            img : "http://placeimg.com/1200/800/nature"
        }
    ]
    return (<ImageList variant="masonry" cols={2} gap={12}>
        {itemData.map((item) => (
            <ImageListItem key={item.img} loading={true}>
                <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
            </ImageListItem>
        ))}
    </ImageList>
)};

export default Recents;