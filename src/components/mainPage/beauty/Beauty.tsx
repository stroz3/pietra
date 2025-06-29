import "./beauty.scss";
import "@/styles/main.scss";

import Image from "next/image";

import SmallSliderImages from "@/components/ui/sliders/smallSliderImages/SmallSliderImages";

const images = [
  {
    src: "/assets/main/beauty/rockBeauteSlide.png",
    alt: "img",
    width: 750,
    height: 300,
  },
  {
    src: "/assets/main/beauty/BUI09955.jpg",
    alt: "img",
    width: 750,
    height: 300,
  },
  {
    src: "/assets/main/beauty/BUI00004.jpg",
    alt: "img",
    width: 750,
    height: 300,
  },
];
export default function Beauty() {
  return (
    <div className="beauty">
      <div className="container">
        <div className="beauty__title">
          <h2 className="beauty__title-text">
            <span>Красота природного камня</span>
            <span>и исключительная</span>
            <span>надежность</span>
          </h2>
        </div>
        <div className="beauty__wrapper">
          <div className="beauty__block">
            <div className="beauty__block-text">
              <p>
                Мы изготавливаем продукцию по технологии «мытый бетон», добавляя
                в качестве наполнителя природный камень фракцией 5–10 мм.
              </p>
              <p>
                Сочетание 70% натуральной каменной крошки и 30% сверхпрочного
                модифицированного цемента М600 обеспечивает нашим изделиям
                максимальную износостойкость и устойчивость к самым сложным
                климатическим условиям.
              </p>
            </div>
            <div className="beauty__block-img">
              <BlockInfo
                textP={"Натуральной каменной крошки"}
                percent={"70%"}
                classNameColor={"beauty__orange-info"}
              />
              <div>
                <Image
                  src={"/assets/main/beauty/RockBeauty.png"}
                  alt={"img"}
                  width={700}
                  height={450}
                />
              </div>
              <BlockInfo
                textP={"Модифицированный цемент"}
                boldTextP={"М600"}
                percent={"30%"}
                classNameColor={"beauty__white-info"}
              />
            </div>
          </div>
          <div className="beauty__block-slider">
            <div className="beauty__block-slider-wrapper">
              <SmallSliderImages images={images} />
            </div>
            <div className="beauty__block-text beauty__block-slider-text ">
              <p>
                Такая технология изготовления обеспечивает антивандальный эффект
                и гарантирует исключительную стойкость к воздействию солнечного
                света, воды, низких температур.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// .beauty__
function BlockInfo({
  textP,
  percent,
  boldTextP,
  classNameColor,
}: {
  textP: string;
  percent: string;
  boldTextP?: string;
  classNameColor: string;
}) {
  return (
    <div className={`beauty__block-info ${classNameColor}`}>
      <div className="beauty__block-info-text">
        <div className="beauty__block-info-text-percent">
          <p>{percent}</p>
          <div className="beauty__block-info-lines">
            <span className="beauty__block-info-line"></span>
          </div>
        </div>
        <div className="beauty__block-info-text-p">
          <p>
            {textP} {boldTextP ? <span>{boldTextP}</span> : null}
          </p>
        </div>
      </div>
    </div>
  );
}
