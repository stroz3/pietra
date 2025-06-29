import "./price.scss";
import "@/styles/main.scss";

import Form from "@/components/form/Form";
import SmallSliderImages from "@/components/ui/sliders/smallSliderImages/SmallSliderImages";

const images = [
  {
    src: "/assets/main/slider/rockSlide1.png",
    alt: "img",
    width: 750,
    height: 300,
  },
  {
    src: "/assets/main/slider/rockSlide3.png",
    alt: "img",
    width: 750,
    height: 300,
  },
  {
    src: "/assets/main/slider/rockSlide2.png",
    alt: "img",
    width: 750,
    height: 300,
  },
];
export default function Price() {
  return (
    <div className={"price"}>
      <div className="price__block-title">
        <div className="container">
          <h2 className="price__block-title-h2">
            Узнайте
            <span>стоимость и сроки</span>
          </h2>
          <h2 className="price__block-title-h2 price-second-h2">
            исполнения вашего заказа
          </h2>
          <p className="price__block-title-text">
            Оставьте заявку - наш специалист свяжется с вами в течение часа
          </p>
        </div>
      </div>
      <div className="container">
        <div className="price__wrapper">
          <div className="price__block-swiper">
            <SmallSliderImages images={images} className={"price__swiper"} />
          </div>
          <div className={"price__block-form"}>
            <Form classNameBtn={"btn-orange"} />
          </div>
        </div>
      </div>
    </div>
  );
}
