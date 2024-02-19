import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import canvaone from "../../data/canvaone.jpg";
import canvathree from "../../data/canvathree.jpg";
import canvatwo from "../../data/canvatwo.jpg";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          //   disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="my-slider"
      >
        <SwiperSlide className="slider">
          <div className="each-slider-box">
            <img alt="" src={canvaone} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <div className="each-slider-box">
            <img alt="" src={canvatwo} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <div className="each-slider-box">
            <img alt="" src={canvathree} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
