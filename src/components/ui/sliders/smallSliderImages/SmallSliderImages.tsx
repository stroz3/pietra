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

interface ImageType {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function SmallSliderImages({
  images,
  className,
}: {
  images: ImageType[];
  className?: string;
}) {
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        className={className ? `mySwiper ${className}` : `mySwiper`}
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              style={{ objectFit: "contain" }}
            />
            {/*width={750} height={300}*/}
          </SwiperSlide>
        ))}
        <SwiperButtons />
      </Swiper>
    </>
  );
}
