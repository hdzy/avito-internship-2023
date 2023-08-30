import React, {FC} from 'react';
import {Carousel} from "antd";
import {Screenshots} from "../../types";

type SliderProps = {
    images: Screenshots[] | undefined;
}

const Slider: FC<SliderProps> = ({images}) => (
    <Carousel effect="fade" autoplay="true" style={{width: "100%", maxWidth: "1440px"}}>
        {images && images.map((e) => {
            return <img src={e.image} key={e.id}/>;
        })}
    </Carousel>
);

export default Slider;