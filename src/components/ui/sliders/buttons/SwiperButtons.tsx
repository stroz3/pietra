import "./buttons.scss";

import { useSwiper } from "swiper/react";

type style = {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
};

interface SwiperButtonsProps {
  positionStyle?: style; // positionStyle is optional and can be of type React.CSSProperties
}

export const SwiperButtons: React.FC<SwiperButtonsProps> = ({
  positionStyle,
}) => {
  const swiper = useSwiper();
  return (
    <div className="swiper-nab-btns" style={positionStyle ?? {}}>
      <div
        onClick={() => {
          swiper.slidePrev();
        }}
      ></div>
      <div
        onClick={() => {
          swiper.slideNext();
        }}
      ></div>
    </div>
  );
};
