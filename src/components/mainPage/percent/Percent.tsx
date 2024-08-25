import "./percnet.scss";
import "@/styles/main.scss";

import Image from "next/image";

export default function Percent() {
  return (
    <div className="percent">
      <div
        className={"percent__image-top"}
        style={{
          width: "100%",
          height: "551px",
          position: "absolute",
          top: 0,
        }}
      >
        <Image src="/assets/main/percent/percent.png" alt="percentImg" fill />
      </div>
      <div className="container">
        <div className="percent__block-green">
          <h2 className="percent__block-title-main">25%</h2>
          <div className="percent__block-title">
            <h2 className="percent__block-title-under">
              Скидка на монтаж «под ключ»
            </h2>
            <p className="percent__block-description">
              Более 10 фактур и цветов натуральной каменной крошки способны
              воплотить самые смелые дизайнерские идеи, сделать прдомовую
              территорию или общественное пространство аккуратным и ухоженным на
              долгие годы.
            </p>
          </div>
        </div>
        <div className="percent__wrapper">
          <div className="percent__block">
            <div className="percent__block-figure">
              <h2 className="percent__block-figure-number">01</h2>
              <div className="percent__block-figure-text">
                Подберем материалы и рассчитаем смету
              </div>
            </div>
            <div className="percent__block-figure">
              <h2 className="percent__block-figure-number">02</h2>
              <div className="percent__block-figure-text percent-second-figure">
                Доставим по адресу
              </div>
            </div>
            <div className="percent__block-figure">
              <h2 className="percent__block-figure-number">03</h2>
              <div className="percent__block-figure-text">
                Проведем все строительные работы
              </div>
            </div>
          </div>
          <div className="percent__block percent-sticky">
            <p className="percent__block-text">
              Мы возьмем на себя всю работу, связанную с монтажом забора,
              укладкой тротуарной плитки, установкой водоотливов, бордюров или
              реализацией любого другого проекта.
            </p>
            <button className="percent__block-btn btn btn-orange">
              Оставить заявку на расчет
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
