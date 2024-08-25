"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./smallSlider.scss";

import Image from "next/image";
import React from "react";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperButtons } from "@/components/ui/sliders/buttons/SwiperButtons";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={"/assets/main/slider/rockSlide1.png"}
            alt={"img"}
            width={750}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/main/slider/rockSlide1.png"}
            alt={"img"}
            width={750}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/main/slider/rockSlide1.png"}
            alt={"img"}
            width={750}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/main/slider/rockSlide1.png"}
            alt={"img"}
            width={750}
            height={300}
          />
        </SwiperSlide>
        <SwiperButtons />
      </Swiper>
    </>
  );
}
