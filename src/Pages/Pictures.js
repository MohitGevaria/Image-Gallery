import { useEffect, useState } from "react";
import "./pictures.css";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./pictures.css";
import { getImages } from "../Common/Utils/UploadImageDB";
import { message, Spin } from "antd";

const Pictures = () => {
    const [imageData, setImageData] = useState([]);
    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getImages("singleimages").then((res) => {
            setImageData(res);
            setIsLoading(false);
        }).catch(() => {
            message.error("Error Fetching Images.")
        });
    }, []);

    const getImg = (imgSrc) => {
        document.body.requestFullscreen();
        setTempImgSrc(imgSrc);
        setModal(true);
    }

    const handleCloseButton = () => {
        setModal(false);
        document.exitFullscreen();
    }

    useEffect(() => {
        const keyDownHandler = event => {

            if (event.key === 'Escape') {
                event.preventDefault();

                setModal(false);
                document.exitFullscreen();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    return (
        <>
            {isLoading && <div className="example">
                <Spin tip={"Loading..."} size="large"/>
            </div>}
            {!isLoading && <><div className={modal ? "modal open" : "modal"}>
                <img src={tempImgSrc} alt="img" />
                <CloseCircleOutlined onClick={handleCloseButton} />
            </div>
            <div className="gallery">
                {imageData.map((item, index) => {
                    return (
                        <div className="pics" key={item.key} onClick={() => getImg(item.imgUrl)}>
                            <img src={item.imgUrl} alt="image" style={{ "width": "100%", "maxHeight": "100vh" }} loading="lazy" />
                        </div>
                    )
                })}
            </div></>}
        </>
    );
}

export default Pictures;