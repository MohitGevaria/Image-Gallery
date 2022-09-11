import React, { useCallback, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import BeforeAfterSlider from 'react-before-after-slider'
const DisplayFullScreen = ({ active, setActive, beforeImage, afterImage }) => {
    const handle = useFullScreenHandle();
    const FIRST_IMAGE = {
        imageUrl: beforeImage
    };
    const SECOND_IMAGE = {
        imageUrl: afterImage
    };

    useEffect(() => {
        if (active) {
            handle.enter();
        }
        else {
            handle.exit();
        }
    }, [active])

    useEffect(() => {
        if (handle.active === false) {
            setActive(false);
        }
    }, [handle.active])

    return (
        <div style={{ "width": "100%", "height": "100%" }}>
            <FullScreen handle={handle}>
                {handle.active && <BeforeAfterSlider
                    before={FIRST_IMAGE.imageUrl}
                    after={SECOND_IMAGE.imageUrl}
                    width={800}
                    height={window.innerHeight}
                />}
            </FullScreen>
        </div>
    );
}

export default DisplayFullScreen;