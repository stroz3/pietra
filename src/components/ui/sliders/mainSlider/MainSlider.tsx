"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./mainSlider.scss";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperButtons } from "@/components/ui/sliders/buttons/SwiperButtons";

export default function MainSlider() {
  return (
    <>
      <Swiper loop={true} modules={[Navigation]} className="mainSwiper">
        <SwiperSlide>
          <div className="mainSwiper__wrapper">
            <div className="mainSwiper__title">
              <div className="mainSwiper__title-block-green"></div>
              <div className="container">
                <div className="mainSwiper__title-wrapper">
                  <h2 className="mainSwiper__title-text">Скидка 25%</h2>
                  <p className="mainSwiper__under-title">На монтаж под ключ</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="mainSwiper__block-btns">
                <Link className="btn btn-light" href={"/catalog"}>
                  Смотреть каталог
                </Link>
              </div>
            </div>
          </div>
          <div className="mainSwiper__image-slide">
            <Image
              src={"/assets/main/mainSlider/mainSlide.png"}
              alt={"main slide"}
              fill={true}
              priority={true}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            mainSlideImage={"/assets/main/mainSlider/rockMainSlide2.png"}
            spanTextFirst={"Цветные"}
            spanTextSecond={"Цветные"}
            textP={"из бетона без каменной крошки"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            imageInLine={"imageInLine"}
            mainSlideImage={"/assets/main/mainSlider/rockMainSlide1.png"}
            spanTextFirst={"Архитектурные"}
            spanTextSecond={"формы"}
            textP={"из бетона с натуральной каменной крошкой"}
          />
        </SwiperSlide>
        <SwiperButtons />
      </Swiper>
    </>
  );
}

interface SlideTypes {
  spanTextFirst?: string;
  spanTextSecond?: string;
  textP?: string;
  mainSlideImage: string;
  imageInLine?: string;
}

function Slide({
  spanTextFirst,
  spanTextSecond,
  textP,
  mainSlideImage,
  imageInLine,
}: SlideTypes) {
  return (
    <div className={`mainSwiper__slide ${imageInLine ? "imageInLine" : ""}`}>
      <div className="container">
        <div className="mainSwiper__slide-wrapper">
          <div className="mainSwiper__slide-block">
            <div className="mainSwiper__slide-title">
              <h2>
                <span>{spanTextFirst}</span>
                <span>{spanTextSecond}</span>
              </h2>
            </div>
            <p>{textP}</p>
            <ul className="mainSwiper__slide-list">
              <li>Цены от производителя</li>
              <li>Более 10 видов фактур</li>
              <li>Устойчивы к морозу и воде</li>
            </ul>
          </div>
          <div className="mainSwiper__slide-block">
            <Link className="btn btn-orange" href={"/catalog"}>
              Смотреть каталог
            </Link>
          </div>
        </div>
      </div>
      <div className="mainSwiper__slide-image">
        <div>
          <Image src={mainSlideImage} alt={"image slide"} fill={true} />
        </div>
        <span className="mainSwiper__slide-image-line main-slide-green-line"></span>
        <span className="mainSwiper__slide-image-line main-slide-white-line"></span>
      </div>
    </div>
  );
}
