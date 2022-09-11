import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { ImageList, ImageListItem } from '@mui/material';
import DisplayFullScreen from '../Components/FullScreen';
import { Spin, message } from "antd";
import { getBAImages } from '../Common/Utils/UploadImageDB';
const Recents = () => {
    const [imageData, setImageData] = useState([]);
    const [modal, setModal] = useState(false);
    const [active, setActive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [beforeImage, setBeforeImage] = useState(null);
    const [afterImage, setAfterImage] = useState(null); 
    useEffect(() => {
        getBAImages().then((res) => {
            setImageData(res);
            setIsLoading(false);
        }).catch(() => {
            message.error("Error Fetching Images.")
        });
    }, []);

    const handleOnClick = (item) => {
        setBeforeImage(item.beforeImage);
        setAfterImage(item.afterImage);
        setModal(true);
        setActive(true);
    }

    return (
        <>
            {isLoading && <div className="example">
                <Spin tip={"Loading..."} size="large"/>
            </div>}
            {!isLoading && <>{modal && <><DisplayFullScreen active={active} setActive={setActive} beforeImage={beforeImage} afterImage={afterImage}/></>}

            <ImageList variant="masonry" cols={2} gap={35} style={{ "padding": "20px" }}>
                {imageData.map((item, index) => (
                    <ImageListItem key={index} loading={true}>
                        <img
                            src={`${item.afterImage}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.afterImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt="image"
                            loading="lazy"
                            onClick={() => handleOnClick(item)}
                        />
                    </ImageListItem>
                ))}
            </ImageList></>}
        </>
    )
};

export default Recents;