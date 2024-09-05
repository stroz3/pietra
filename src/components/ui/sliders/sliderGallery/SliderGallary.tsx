// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "./sliderGallary.scss";

import React, { useState } from "react";
import { Swiper as SwiperClass } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperButtons } from "@/components/ui/sliders/buttons/SwiperButtons";

export default function SliderGallary() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="gallery">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-gallery slider-gallery"
      >
        <SwiperSlide>
          <img src="/assets/main/projects/catalogMain1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/main/projects/catalogMain2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/main/projects/catalogMain3.png" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-gallery slider-gallery-2"
      >
        <SwiperSlide>
          <img src="/assets/main/projects/catalogMain1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/main/projects/catalogMain2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/main/projects/catalogMain3.png" />
        </SwiperSlide>
        <SwiperButtons />
      </Swiper>
    </div>
  );
}
