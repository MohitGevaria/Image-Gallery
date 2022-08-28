// import React, { useState } from "react";
// import BeforeAfterSlider from "react-before-after-slider";

// const images = [
//   {
//     before:
//       "https://cdn.phixer.net/assets/images/portfolio/lawn_replacement/01.jpg",
//     after:
//       "https://cdn.phixer.net/assets/images/portfolio/lawn_replacement/02.jpg"
//   },
//   {
//     before:
//       "https://cdn.phixer.net/assets/images/portfolio/lawn_replacement/03.jpg",
//     after:
//       "https://cdn.phixer.net/assets/images/portfolio/lawn_replacement/04.jpg"
//   }
// ];

// export default function BeforeAfter() {
//   const [index, setIndex] = useState(0);
//   const currentImage = images[index];

//   return (
//     <div className="App">
//       <BeforeAfterSlider
//         width={640}
//         height={480}
//         before={currentImage.before}
//         after={currentImage.after}
//       />
//       <div>
//         <button onClick={() => setIndex((i) => Math.max(0, i - 1))}>
//           prev
//         </button>
//         <button
//           onClick={() => setIndex((i) => Math.min(images.length - 1, i + 1))}
//         >
//           next
//         </button>
//       </div>
//     </div>
//   );
// }

import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';


const BeforeAfter = () => {
    const FIRST_IMAGE = {
        imageUrl: 'https://cdn.phixer.net/assets/images/portfolio/lawn_replacement/02.jpg'
    };
    const SECOND_IMAGE = {
        imageUrl: 'https://cdn.phixer.net/assets/images/portfolio/lawn_replacement/01.jpg'
    };

    return (<ReactBeforeSliderComponent
        firstImage={FIRST_IMAGE}
        secondImage={SECOND_IMAGE} />);
}

export default BeforeAfter;
