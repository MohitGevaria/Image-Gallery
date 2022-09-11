import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { ComparisonSlider } from 'react-comparison-slider';


const BeforeAfter = ({ beforeImage, afterImage }) => {
    const BEFORE_IMAGE = {
        imageUrl: "https://image-gallery-priyank.s3.ap-south-1.amazonaws.com/beforeafterimages/05e3be3b-ada0-4950-bc07-9067ffd3a157.jpg"
    };
    const AFTER_IMAGE = {
        imageUrl: "https://image-gallery-priyank.s3.ap-south-1.amazonaws.com/beforeafterimages/6acc8a31-2012-46d9-812a-e38a80ea40ec.jpg"
    };

    // return (
    //     <ReactBeforeSliderComponent
    //         firstImage={BEFORE_IMAGE}
    //         secondImage={AFTER_IMAGE} />
    // );

    return <ComparisonSlider
      defaultValue={50}
      itemOne={<img src={BEFORE_IMAGE.imageUrl}></img>}
      itemTwo={<img src={AFTER_IMAGE.imageUrl}></img>}
      aspectRatio={16 / 9}
      orientation="horizontal"
    />
}

export default BeforeAfter;
