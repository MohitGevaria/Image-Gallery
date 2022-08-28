import { useState } from "react";
import "./pictures.css";
import { CloseCircleOutlined } from "@ant-design/icons";

const Pictures = () => {
    
    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");
    const data = [
        {
            id : 1,
            imgsrc: "http://placeimg.com/1200/800/nature",
        },
        {
            id : 2,
            imgsrc: "http://placeimg.com/800/1200/nature",
        },
        {
            id : 3,
            imgsrc: "http://placeimg.com/1920/1080/nature",
        },
        {
            id : 4,
            imgsrc: "http://placeimg.com/1500/500/nature",
        },
    ]

    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModal(true);
    }
    return ( 
        <>
        <div className={modal? "modal open":"modal"}>
            <img src={tempImgSrc} alt="img" />
            <CloseCircleOutlined onClick={() => {setModal(false)}} />
        </div>
        <div className="gallery">
            {data.map((item, index) => {
                return(
                    <div className="pics" key={index} onClick={() => getImg(item.imgsrc)}>
                        <img src={item.imgsrc} alt="image" style={{"width": "100%"}} loading="lazy"/>
                    </div>
                )
            })}
        </div>
        </>
     );
}
 
export default Pictures;