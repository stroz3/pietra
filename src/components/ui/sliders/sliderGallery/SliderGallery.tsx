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
import { GalleryType } from "@/types/productsType";

export default function SliderGallery({ slides }: { slides: GalleryType }) {
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
        {slides.images.map((el, index) => (
          <SwiperSlide key={`${index}`}>
            <img src={el.src} alt={el.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-gallery slider-gallery-2"
      >
        {slides.images.map((el, index) => (
          <SwiperSlide key={`${index}`}>
            <img src={el.src} alt={el.alt} />
          </SwiperSlide>
        ))}
        <SwiperButtons />
      </Swiper>
    </div>
  );
}
// Доработать систему, сейчас она не работает
// export function ViewSlides({ slides }: { slides: GalleryType[] }) {
//   return slides.map((el, index) => (
//     <SwiperSlide key={`${el.id}-${index}`}>
//       <img src={el.img.src} alt={el.img.alt} />
//     </SwiperSlide>
//   ));
// }
