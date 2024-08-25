import "./style/about.scss";
import "../../../styles/main.scss";

import Image from "next/image";

import Form from "@/components/form/Form";

export default function About() {
  return (
    <div className="about">
      <div className="about__header">
        <div className="container">
          <div className="about__header-wrapper">
            <div className="about__header-wrapper-block">
              <div className="about__header-block white">
                <div className="about__header-block-title">
                  <h2 className="about__header-title-text">PietraStyle</h2>
                  <p className="about__header-description-text">
                    Изделия, создающие комфорт
                  </p>
                </div>
                <div className="about__header-block">
                  <p className="about__header-block-text">
                    Опыт и качество <br /> с 2019 года
                  </p>
                </div>
              </div>
              <div className="about__header-block green">
                <ul className="about__header-text-list">
                  <li>Экологически чистое сырье высшего качества</li>
                  <li>Собственное производство полного цикла</li>
                  <li>Поставки по всей России</li>
                  <li>
                    Работа по индивидуальным заказам/партиям, сочетаниям фактур
                    и цветов
                  </li>
                </ul>
              </div>
            </div>
            <div className="about__header-under-text">
              <span>Компания «PietraStyle»</span> - это уникальный опыт и
              современные технологии, которые обеспечивают исключительно высокое
              качество производимой продукции уже более 5 лет.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="about__wrapper">
          <div className="about__how-work">
            <div className="about__how-work-title">
              <h2 className="about__how-work-title-text">
                <span>Как мы</span>
                <span className="about-orange">работаем?</span>
              </h2>
              <p className="about__how-work-text">
                <span>
                  Для производства мы используем только натуральное качественное
                  сырьё — природную каменную крошку.
                </span>

                <span>
                  Благодаря тщательному контролю на всех этапах производства, вы
                  можете быть уверены — наши изделия сохранять эстетичность,
                  насыщенные оттенки и уникальную фактуру на долгие годы.
                </span>
              </p>
            </div>
            <div className="about__how-work-block-image">
              <Image
                src={"/assets/about/howWorkF.png"}
                width={420}
                height={420}
                alt={"img"}
                className="first-img-block"
              />
              <Image
                src={"/assets/about/howWorkU.png"}
                width={133}
                height={200}
                alt={"img"}
                className="image-small-mobile"
              />
              <div className="about__how-work-block-image-small">
                <Image
                  src={"/assets/about/howWorkU.png"}
                  width={420}
                  height={230}
                  alt={"img"}
                />
                <Image
                  src={"/assets/about/howWorkD.png"}
                  width={420}
                  height={170}
                  alt={"img"}
                />
              </div>
              <Image
                src={"/assets/about/howWorkD.png"}
                width={133}
                height={200}
                alt={"img"}
                className="image-small-mobile"
              />
              <Image
                src={"/assets/about/howWorkL.png"}
                width={420}
                height={420}
                alt={"img"}
                className="last-img-block"
              />
            </div>
            <div className="about__how-work-title sticky">
              <p className="about__how-work-text ">
                Современная линия по производству архитектурного бетона М600 и
                оборудованный цех формовки позволяют осуществить полный цикл
                работ по изготовлению тротуарной плитки, бордюров, блоков и
                элементов заборов, водоотводов и многого другого
              </p>
            </div>
            <div className="about__how-work-block-image ">
              <div className="about__how-work-block-image-small second-image-small-mobile">
                <Image
                  src={"/assets/about/howWorkUS.png"}
                  width={420}
                  height={230}
                  alt={"img"}
                  className="second-image-small"
                />
                <Image
                  src={"/assets/about/howWorkDS.png"}
                  width={420}
                  height={170}
                  alt={"img"}
                  className="second-image-small"
                />
              </div>
              <Image
                src={"/assets/about/howWorkLS.png"}
                width={420}
                height={420}
                quality={100}
                alt={"img"}
                className="last-img-block-second"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="about__open">
        <div className="container">
          <div className="about__open-title">
            <h2>Открыты к сотрудничеству</h2>
            <h2>и предложениям!</h2>
          </div>
          <div className="about__open-wrapper">
            <div className="about__open-block">
              {/*<div*/}
              {/*  className="about__open-form-mobile"*/}
              {/*  style={{*/}
              {/*    position: "absolute",*/}
              {/*    top: "0px",*/}
              {/*    right: "0px",*/}
              {/*  }}*/}
              {/*>*/}
              {/*  <Form />*/}
              {/*</div>*/}
              <div className="about__open-block-img">
                <Image
                  src="/assets/about/rockAbout.png"
                  width={497}
                  height={747}
                  alt={"rock"}
                />
              </div>
              <div className="about__open-text">
                Мы постоянно развиваемся и стараемся предложить для наших
                клиентов новые решения, а для партнёров — перспективы
                взаимовыгодного сотрудничества. Присылайте нам свои предложения.
                отзывы, комментарии и пожелания — мы ответим на каждое письмо
              </div>
            </div>
            <div className="about__open-block">
              <Form classNameForm={"form-light"} classNameBtn={"btn-orange"} />
            </div>
            {/*<div*/}
            {/*  className="about__open-block form-desctop"*/}
            {/*  style={{*/}
            {/*    position: "absolute",*/}
            {/*    top: "0px",*/}
            {/*    right: "0",*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <Form />*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
