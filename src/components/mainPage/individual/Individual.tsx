import "./individual.scss";

import Image from "next/image";

export default function Individual() {
  return (
    <div className="individual">
      <div className="container">
        <div className="individual__block-title">
          <h2 className="individual__block-title-text">
            <span>Индивидуальные</span>
            <span>Решения под заказ</span>
          </h2>
        </div>
        <div className="individual__wrapper">
          <div className="individual_block">
            <div className="individual__block-description">
              <p className="individual__block-description-text">
                Предлагаем уникальные решения, созданные специально для вас.
                Учтём все пожелания, чтобы ваш заказ полностью соответствовал
                вашим потребностям и ожиданиям.
              </p>
            </div>
            <div className="individual__block-info">
              <div className="individual__block-info-block">
                <span className="individual__block-info-block-figure">
                  Любые формы
                </span>
                <span className="individual__block-info-block-figure">
                  Любые размеры
                </span>
              </div>
              <span className="individual__block-info-block-figure individual-figure-long">
                Свободный выбор цветов
              </span>
              <span className="individual__block-info-block-figure individual-figure-long">
                Начинка на выбор
              </span>
            </div>
          </div>
          <div className="individual__block-img">
            <Image
              src={"/assets/main/individual/individualRocks.png"}
              alt={"rock"}
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
