import "./price.scss";
import "@/styles/main.scss";

import Form from "@/components/form/Form";
import SmallSlider from "@/components/ui/sliders/smallSlider/SmallSlider";

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
            <SmallSlider />
          </div>
          <div className={"price__block-form"}>
            <Form classNameBtn={"btn-orange"} />
          </div>
        </div>
      </div>
    </div>
  );
}
