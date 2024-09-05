import "./choose.scss";

import Image from "next/image";

export default function Choose() {
  return (
    <div className="choose">
      <div className="container">
        <div className="choose__wrapper">
          <div className="choose__block">
            <div className="choose__block-wrapper-first">
              <div>
                <h2 className="choose__block-title">
                  <span>Идеальный выбор</span>
                  <span>для благоустройства территорий</span>
                </h2>
              </div>
              <div>
                <div className="choose__block-figures">
                  <div className="choose__figure-long">
                    <span className="choose__figure second-long">
                      Загородные дома
                    </span>
                  </div>
                  <span className="choose__figure first-long">
                    <p>Фасады зданий</p>
                  </span>
                  <span className="choose__figure first-trapezoid">Дворы</span>
                </div>
                <div className="choose__block-figures">
                  <span className="choose__figure rectangle">
                    Скверы и парки
                  </span>
                  <span className="choose__figure second-trapezoid">
                    Общественные пространства
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="choose__block">
            <div className="choose__block-wrapper-second">
              <p>
                Плитка, забор или дорожка с фактурой из крошки природного камня
                — стильное и сверхнадежное решение, которое поможет реализовать
                любую концепцию ландшафтного дизайна.
              </p>
              <div className="choose__block-image-rock">
                <Image
                  src={"/assets/main/choose/rockChoose.png"}
                  alt={"rock"}
                  width={691}
                  height={260}
                />
              </div>
              <p>
                Мы занимаемся производством эстетичных изделий из бетона с
                каменной крошкой и сопутствующей продукции уже более 5 лет.
                Большой опыт, современное производство и успешная реализация
                крупных проектов позволяют нам предлагать своим клиентам
                выгодные условия и гарантировать исключительно высокое качество.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
